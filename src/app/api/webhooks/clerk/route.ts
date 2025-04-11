import { headers } from 'next/headers'
import { type WebhookEvent } from '@clerk/nextjs/server'
import { db } from '~/server/db'
import { users } from '~/server/db/schema'
import { Webhook } from 'svix'

const webhookSecret = process.env.CLERK_WEBHOOK_SECRET ?? ''

async function validateRequest(request: Request) {
  const payloadString = await request.text()
  const headerPayload = await headers()

  // Validate required headers
  const svixId = headerPayload.get('svix-id')
  const svixTimestamp = headerPayload.get('svix-timestamp')
  const svixSignature = headerPayload.get('svix-signature')

  if (!svixId || !svixTimestamp || !svixSignature) {
    throw new Error('Missing required Svix headers')
  }

  const svixHeaders = {
    'svix-id': svixId,
    'svix-timestamp': svixTimestamp,
    'svix-signature': svixSignature
  }

  if (!webhookSecret) {
    throw new Error('Missing CLERK_WEBHOOK_SECRET environment variable')
  }

  const wh = new Webhook(webhookSecret)
  return wh.verify(payloadString, svixHeaders) as WebhookEvent
}

export async function POST(request: Request) {
  try {
    const payload = await validateRequest(request)

    if (payload.type === 'user.created') {
      try {
        await db.insert(users).values({
          id: payload.data.id,
          firstName: payload.data.first_name,
          lastName: payload.data.last_name,
          profileImage: payload.data.image_url
        })

        return Response.json(
          {
            success: true,
            message: 'User created successfully'
          },
          { status: 201 }
        )
      } catch (dbError) {
        console.error('Database error:', dbError)
        return Response.json(
          {
            success: false,
            message: 'Failed to create user in database'
          },
          { status: 500 }
        )
      }
    }

    // Handle unhandled webhook types
    return Response.json(
      {
        success: true,
        message: 'Webhook received but no action taken'
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Webhook error:', error)

    // Determine appropriate error status and message
    if (error instanceof Error) {
      if (error.message.includes('Missing required Svix headers')) {
        return Response.json(
          {
            success: false,
            message: 'Invalid webhook headers'
          },
          { status: 400 }
        )
      }

      if (error.message.includes('CLERK_WEBHOOK_SECRET')) {
        return Response.json(
          {
            success: false,
            message: 'Server configuration error'
          },
          { status: 500 }
        )
      }
    }

    // Generic error response
    return Response.json(
      {
        success: false,
        message: 'Internal server error'
      },
      { status: 500 }
    )
  }
}

import 'server-only'

import { auth } from '@clerk/nextjs/server'
import { env } from '~/env'
import { db } from '~/server/db'
import { users } from '~/server/db/schema'
import { eq, sql } from 'drizzle-orm'
import jwt from 'jsonwebtoken'

type Transaction = Parameters<Parameters<typeof db.transaction>[0]>[0]

/**
 * Executes a query within a transaction, setting the full JWT for RLS enforcement.
 *
 * @param jwt - The Clerk JWT token
 * @param queryFn - The query function to execute after setting the session
 */
export const withJwtSession = async <T>(
  token: string,
  queryFn: (tx: Transaction) => Promise<T>
): Promise<T> => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
  const payload = jwt.verify(token, env.CLERK_PEM_PUBLIC_KEY, {
    algorithms: ['RS256']
  }) as jwt.JwtPayload

  return db.transaction(async tx => {
    await tx.execute(
      sql`SELECT set_config('request.jwt.claims', '${sql.raw(JSON.stringify(payload))}  ', TRUE)`
    )
    await tx.execute(sql`SET LOCAL ROLE authenticated;`)
    return queryFn(tx)
  })
}

/**
 * Retrieves the current user's data from the database using the full JWT.
 */
export const getCurrentUserData = async () => {
  const { userId, getToken } = await auth()
  const jwt = await getToken()

  if (!jwt || !userId) {
    return null
  }

  return withJwtSession(jwt, async tx => {
    return tx.query.users.findFirst({
      where: eq(users.id, userId)
    })
  })
}

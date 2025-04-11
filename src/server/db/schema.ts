import { sql } from 'drizzle-orm'
import {
  boolean,
  index,
  integer,
  pgPolicy,
  pgRole,
  pgTable,
  text,
  timestamp,
  varchar
} from 'drizzle-orm/pg-core'

// drizzle-orm/supabase
export const anonRole = pgRole('anon').existing()
export const authenticatedRole = pgRole('authenticated').existing()
export const serviceRole = pgRole('service_role').existing()
export const postgresRole = pgRole('postgres_role').existing()
export const supabaseAuthAdminRole = pgRole('supabase_auth_admin').existing()

export const users = pgTable(
  'users',
  {
    id: text('id').primaryKey().notNull(),
    firstName: varchar('first_name', { length: 256 }),
    lastName: varchar('last_name', { length: 256 }),
    profileImage: text('profile_image'),
    customerId: varchar('customer_id', { length: 256 }),
    sessionId: varchar('session_id', { length: 256 }),
    planId: varchar('plan_id', { length: 256 }),
    hasPro: boolean('has_pro').default(false),
    credits: integer('credits').default(15).notNull(),
    onFreeTrial: boolean('on_free_trial').default(false),
    trialEndsAt: timestamp('trial_ends_at')
  },
  user => [
    index('user_id_idx').on(user.id),
    pgPolicy('users can only select their own data', {
      as: 'permissive',
      to: 'authenticated',
      for: 'select',
      using: sql`(( SELECT (auth.jwt() ->> 'sub'::text)) = id)`
    }),
    pgPolicy('users can only update their own data', {
      as: 'permissive',
      to: 'authenticated',
      for: 'update',
      using: sql`(( SELECT (auth.jwt() ->> 'sub'::text)) = id)`
    })
  ]
).enableRLS()

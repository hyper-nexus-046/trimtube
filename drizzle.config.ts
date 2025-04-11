import { type Config } from 'drizzle-kit'

import { env } from './src/env'

export default {
  schema: './src/server/db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: env.DATABASE_URL
  },
  out: './supabase/migrations',
  verbose: true,
  strict: true,
  schemaFilter: 'public',
  entities: {
    roles: {
      provider: 'supabase',
      exclude: ['supabase_auth_admin']
    }
  },
  migrations: {
    schema: 'public'
  }
} satisfies Config

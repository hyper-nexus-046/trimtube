CREATE TABLE "users" (
	"id" text PRIMARY KEY NOT NULL,
	"first_name" varchar(256),
	"last_name" varchar(256),
	"profile_image" text,
	"customer_id" varchar(256),
	"session_id" varchar(256),
	"plan_id" varchar(256),
	"has_pro" boolean DEFAULT false,
	"credits" integer DEFAULT 15 NOT NULL,
	"on_free_trial" boolean DEFAULT false,
	"trial_ends_at" timestamp
);
--> statement-breakpoint
ALTER TABLE "users" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE INDEX "user_id_idx" ON "users" USING btree ("id");--> statement-breakpoint
CREATE POLICY "users can only select their own data" ON "users" AS PERMISSIVE FOR SELECT TO "authenticated" USING ((( SELECT (auth.jwt() ->> 'sub'::text)) = id));--> statement-breakpoint
CREATE POLICY "users can only update their own data" ON "users" AS PERMISSIVE FOR UPDATE TO "authenticated" USING ((( SELECT (auth.jwt() ->> 'sub'::text)) = id));
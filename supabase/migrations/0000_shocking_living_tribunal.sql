CREATE TABLE IF NOT EXISTS "authors" (
	"id_user" text PRIMARY KEY NOT NULL,
	"donation_link" varchar,
	"social_media" jsonb,
	"joined_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "books" (
	"id_book" text PRIMARY KEY NOT NULL,
	"title" varchar NOT NULL,
	"description" text,
	"pdf_url" varchar NOT NULL,
	"id_user" text NOT NULL,
	"category" varchar,
	"genre" varchar,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "playlist_books" (
	"id_playlist" text NOT NULL,
	"id_book" text NOT NULL,
	"added_at" timestamp DEFAULT now(),
	"row_number" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "playlists" (
	"id_playlist" text PRIMARY KEY NOT NULL,
	"id_user" text NOT NULL,
	"name" varchar NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "rates" (
	"id_user" text NOT NULL,
	"id_book" text NOT NULL,
	"rate" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "replies" (
	"id_reply" text PRIMARY KEY NOT NULL,
	"id_review" text NOT NULL,
	"id_user" text NOT NULL,
	"text" text,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "reviews" (
	"id_review" text PRIMARY KEY NOT NULL,
	"id_book" text NOT NULL,
	"id_user" text NOT NULL,
	"text" text,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id_user" text PRIMARY KEY NOT NULL,
	"email" varchar NOT NULL,
	"password" varchar NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"full_name" text NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "authors" ADD CONSTRAINT "authors_id_user_users_id_user_fk" FOREIGN KEY ("id_user") REFERENCES "public"."users"("id_user") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "books" ADD CONSTRAINT "books_id_user_authors_id_user_fk" FOREIGN KEY ("id_user") REFERENCES "public"."authors"("id_user") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "playlist_books" ADD CONSTRAINT "playlist_books_id_playlist_playlists_id_playlist_fk" FOREIGN KEY ("id_playlist") REFERENCES "public"."playlists"("id_playlist") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "playlist_books" ADD CONSTRAINT "playlist_books_id_book_books_id_book_fk" FOREIGN KEY ("id_book") REFERENCES "public"."books"("id_book") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "playlists" ADD CONSTRAINT "playlists_id_user_users_id_user_fk" FOREIGN KEY ("id_user") REFERENCES "public"."users"("id_user") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "rates" ADD CONSTRAINT "rates_id_user_users_id_user_fk" FOREIGN KEY ("id_user") REFERENCES "public"."users"("id_user") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "rates" ADD CONSTRAINT "rates_id_book_books_id_book_fk" FOREIGN KEY ("id_book") REFERENCES "public"."books"("id_book") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "replies" ADD CONSTRAINT "replies_id_review_reviews_id_review_fk" FOREIGN KEY ("id_review") REFERENCES "public"."reviews"("id_review") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "replies" ADD CONSTRAINT "replies_id_user_users_id_user_fk" FOREIGN KEY ("id_user") REFERENCES "public"."users"("id_user") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "reviews" ADD CONSTRAINT "reviews_id_book_books_id_book_fk" FOREIGN KEY ("id_book") REFERENCES "public"."books"("id_book") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "reviews" ADD CONSTRAINT "reviews_id_user_users_id_user_fk" FOREIGN KEY ("id_user") REFERENCES "public"."users"("id_user") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

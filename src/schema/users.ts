import { pgTable, text, timestamp, uuid, varchar } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id_user: text('id_user').primaryKey().$defaultFn(() => crypto.randomUUID()),
  email: varchar('email').unique().notNull(),
  password: varchar('password').notNull(),
  created_at: timestamp('created_at').defaultNow(),
  full_name: text('full_name').notNull(),
  cover_photo: text('cover_photo').default("https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg")
});

export type InsertUsers = typeof users.$inferInsert;
export type SelectUsers = typeof users.$inferSelect;
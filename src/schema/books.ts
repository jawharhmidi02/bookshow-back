import { pgTable, text, timestamp, uuid, varchar } from 'drizzle-orm/pg-core';
import { authors } from './authors';
import { users } from './users'

export const books = pgTable('books', {
  id_book: text('id_book').primaryKey().$defaultFn(() => crypto.randomUUID()),
  title: varchar('title').notNull(),
  description: text('description'),
  pdf_url: varchar('pdf_url').notNull(),
  id_user: text('id_user').notNull().references(() => users.id_user, {onDelete: 'cascade'}),
  category: varchar('category'),
  genre: varchar('genre'),
  created_at: timestamp('created_at').defaultNow(),
  cover_url: text('cover_url').default("/_next/image?url=%2Fbookcover.jpg&w=640&q=75"),
  author: text('author').default('Anonymous')
});

export type InsertBooks = typeof books.$inferInsert;
export type SelectBooks = typeof books.$inferSelect;
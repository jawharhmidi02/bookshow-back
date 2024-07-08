import { pgTable, text, timestamp } from 'drizzle-orm/pg-core';
import { books } from './books'; 
import { users } from './users'; 

export const reviews = pgTable('reviews', {
  id_review: text('id_review').primaryKey().$defaultFn(() => crypto.randomUUID()), 
  id_book: text('id_book').notNull().references(() => books.id_book, { onDelete: 'cascade'}),
  id_user: text('id_user').notNull().references(() => users.id_user, { onDelete: 'cascade'}),
  text: text('text'),
  created_at: timestamp('created_at').defaultNow(),
});

export type InsertReviews = typeof reviews.$inferInsert;
export type SelectReviews = typeof reviews.$inferSelect;
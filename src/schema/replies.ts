import { pgTable, text, timestamp } from 'drizzle-orm/pg-core';
import { reviews } from './reviews'; 
import { users } from './users'; 

export const replies = pgTable('replies', {
  id_reply: text('id_reply').primaryKey().$defaultFn(() => crypto.randomUUID()),
  id_review: text('id_review').notNull().references(() => reviews.id_review, { onDelete: 'cascade'}),
  id_user: text('id_user').notNull().references(() => users.id_user, { onDelete: 'cascade'}),
  text: text('text'),
  created_at: timestamp('created_at').defaultNow(),
});

export type InsertReplies = typeof replies.$inferInsert;
export type SelectReplies = typeof replies.$inferSelect;
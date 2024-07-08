import { pgTable, integer, text } from 'drizzle-orm/pg-core';
import { users } from './users';
import { books } from './books';

export const rates = pgTable('rates', {
  id_user: text('id_user').references(() => users.id_user, { onDelete: 'set null'}),
  id_book: text('id_book').references(() => books.id_book, { onDelete: 'cascade'}),
  rate: integer('rate').notNull()
});

export type InsertRates = typeof rates.$inferInsert;
export type SelectRates = typeof rates.$inferSelect;
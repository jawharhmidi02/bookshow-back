import { jsonb, pgTable, timestamp, text, varchar } from 'drizzle-orm/pg-core';
import { users } from './users';

export const authors = pgTable('authors', {
    id_user: text('id_user').primaryKey().references(() => users.id_user, {onDelete: 'cascade'}), 
    donation_link: varchar('donation_link'),
    social_media: jsonb('social_media'),
    joined_at: timestamp('joined_at').defaultNow(),
});

export type InsertAuthors = typeof authors.$inferInsert;
export type SelectAuthors = typeof authors.$inferSelect;
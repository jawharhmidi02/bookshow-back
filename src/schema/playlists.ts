import { pgTable, timestamp, text, varchar } from 'drizzle-orm/pg-core';
import { users } from './users';

export const playlists = pgTable('playlists', {
    id_playlist: text('id_playlist').primaryKey().$defaultFn(() => crypto.randomUUID()),
    id_user: text('id_user').notNull().references(() => users.id_user, { onDelete: 'cascade'}),
    name: varchar('name').notNull(),
    created_at: timestamp('created_at').defaultNow(),
    updated_at: timestamp('updated_at').defaultNow().$onUpdate(() => new Date())
});

export type InsertPlaylists = typeof playlists.$inferInsert;
export type SelectPlaylists = typeof playlists.$inferSelect;
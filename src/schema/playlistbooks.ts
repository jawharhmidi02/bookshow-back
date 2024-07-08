import { pgTable, text, integer, timestamp } from 'drizzle-orm/pg-core';
import { playlists } from './playlists'; 
import { books } from './books';

export const playlistBooks = pgTable('playlist_books', {
  id_playlist: text('id_playlist').notNull().references(() => playlists.id_playlist, { onDelete: 'cascade'}),
  id_book: text('id_book').notNull().references(() => books.id_book, { onDelete: 'cascade'}), 
  added_at: timestamp('added_at').defaultNow(),
  row_number: integer('row_number')
});

export type InsertPlaylistbooks = typeof playlistBooks.$inferInsert;
export type SelectPlaylistbooks = typeof playlistBooks.$inferSelect;
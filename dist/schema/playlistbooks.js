"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.playlistBooks = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const playlists_1 = require("./playlists");
const books_1 = require("./books");
exports.playlistBooks = (0, pg_core_1.pgTable)('playlist_books', {
    id_playlist: (0, pg_core_1.text)('id_playlist').notNull().references(() => playlists_1.playlists.id_playlist, { onDelete: 'cascade' }),
    id_book: (0, pg_core_1.text)('id_book').notNull().references(() => books_1.books.id_book, { onDelete: 'cascade' }),
    added_at: (0, pg_core_1.timestamp)('added_at').defaultNow(),
    row_number: (0, pg_core_1.integer)('row_number')
});
//# sourceMappingURL=playlistbooks.js.map
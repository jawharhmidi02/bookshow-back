"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPlaylistBook = createPlaylistBook;
exports.getPlaylistBookById = getPlaylistBookById;
exports.getPlaylistBookByIdOrderTime = getPlaylistBookByIdOrderTime;
exports.updatePlaylistBookById = updatePlaylistBookById;
exports.deletePlaylistBooks = deletePlaylistBooks;
const connect_1 = require("../db/connect");
const playlistbooks_1 = require("../schema/playlistbooks");
const drizzle_orm_1 = require("drizzle-orm");
async function createPlaylistBook(data) {
    const test = await connect_1.db
        .select()
        .from(playlistbooks_1.playlistBooks)
        .where((0, drizzle_orm_1.and)((0, drizzle_orm_1.eq)(playlistbooks_1.playlistBooks.id_book, data.id_book), (0, drizzle_orm_1.eq)(playlistbooks_1.playlistBooks.id_playlist, data.id_playlist)));
    if (test.length !== 0) {
        return { msg: 'error' };
    }
    const response = await connect_1.db.insert(playlistbooks_1.playlistBooks).values(data).returning();
    return response;
}
async function getPlaylistBookById(id) {
    return connect_1.db
        .select()
        .from(playlistbooks_1.playlistBooks)
        .where((0, drizzle_orm_1.eq)(playlistbooks_1.playlistBooks.id_playlist, id))
        .orderBy(playlistbooks_1.playlistBooks.row_number);
}
async function getPlaylistBookByIdOrderTime(id) {
    return connect_1.db
        .select()
        .from(playlistbooks_1.playlistBooks)
        .where((0, drizzle_orm_1.eq)(playlistbooks_1.playlistBooks.id_playlist, id))
        .orderBy(playlistbooks_1.playlistBooks.added_at);
}
async function updatePlaylistBookById(id_playlist, id_book, data) {
    const response = await connect_1.db.update(playlistbooks_1.playlistBooks).set(data).where((0, drizzle_orm_1.and)((0, drizzle_orm_1.eq)(playlistbooks_1.playlistBooks.id_playlist, id_playlist), (0, drizzle_orm_1.eq)(playlistbooks_1.playlistBooks.id_book, id_book))).returning();
    return response;
}
async function deletePlaylistBooks(id_playlist, id_book) {
    const respone = await connect_1.db.delete(playlistbooks_1.playlistBooks).where((0, drizzle_orm_1.and)((0, drizzle_orm_1.eq)(playlistbooks_1.playlistBooks.id_playlist, id_playlist), (0, drizzle_orm_1.eq)(playlistbooks_1.playlistBooks.id_book, id_book))).returning();
    return respone;
}
//# sourceMappingURL=playlistbooks.js.map
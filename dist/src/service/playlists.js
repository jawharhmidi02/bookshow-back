"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPlaylist = createPlaylist;
exports.getPlaylistsById = getPlaylistsById;
exports.updatePlaylistById = updatePlaylistById;
exports.deletePlaylist = deletePlaylist;
const connect_1 = require("../db/connect");
const playlists_1 = require("../schema/playlists");
const drizzle_orm_1 = require("drizzle-orm");
async function createPlaylist(data) {
    const test = await connect_1.db
        .select()
        .from(playlists_1.playlists)
        .where((0, drizzle_orm_1.eq)(playlists_1.playlists.name, data.name));
    if (test.length !== 0) {
        return { msg: 'error' };
    }
    const response = await connect_1.db.insert(playlists_1.playlists).values(data).returning();
    return response;
}
async function getPlaylistsById(id) {
    return connect_1.db
        .select()
        .from(playlists_1.playlists)
        .where((0, drizzle_orm_1.eq)(playlists_1.playlists.id_user, id))
        .orderBy(playlists_1.playlists.updated_at);
}
async function updatePlaylistById(id, data) {
    const response = await connect_1.db.update(playlists_1.playlists).set(data).where((0, drizzle_orm_1.eq)(playlists_1.playlists.id_playlist, id)).returning();
    return response;
}
async function deletePlaylist(id) {
    const respone = await connect_1.db.delete(playlists_1.playlists).where((0, drizzle_orm_1.eq)(playlists_1.playlists.id_playlist, id)).returning();
    return respone;
}
//# sourceMappingURL=playlists.js.map
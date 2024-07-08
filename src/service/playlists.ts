import { db } from '../db/connect';
import { InsertPlaylists, playlists, SelectPlaylists } from '../schema/playlists';
import { eq } from 'drizzle-orm';

export async function createPlaylist(data: InsertPlaylists) {
    const test = await db
    .select()
    .from(playlists)
    .where(eq(playlists.name, data.name))

    if(test.length !== 0){
        return {msg: 'error'}
    }

    const response = await db.insert(playlists).values(data).returning();
    return response;
}

export async function getPlaylistsById(id: SelectPlaylists['id_user']) {
    return db
    .select()
    .from(playlists)
    .where(eq(playlists.id_user, id))
    .orderBy(playlists.updated_at);
}

export async function updatePlaylistById(id: SelectPlaylists['id_playlist'], data: Partial<Omit<SelectPlaylists, 'id_playlist'>>) {
    const response = await db.update(playlists).set(data).where(eq(playlists.id_playlist, id)).returning();
    
    return response;
}

export async function deletePlaylist(id: SelectPlaylists['id_playlist']) {
    const respone = await db.delete(playlists).where(eq(playlists.id_playlist, id)).returning();

    return respone;
}
  
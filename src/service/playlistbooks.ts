import { db } from '../db/connect';
import { InsertPlaylistbooks, playlistBooks, SelectPlaylistbooks } from '../schema/playlistbooks';
import { and, eq } from 'drizzle-orm';

export async function createPlaylistBook(data: InsertPlaylistbooks) {
    const test = await db
    .select()
    .from(playlistBooks)
    .where(and(eq(playlistBooks.id_book, data.id_book), eq(playlistBooks.id_playlist, data.id_playlist)))

    if(test.length !== 0){
        return {msg: 'error'}
    }

    const response = await db.insert(playlistBooks).values(data).returning();
    return response;
}

export async function getPlaylistBookById(id: SelectPlaylistbooks['id_playlist']) {
    return db
    .select()
    .from(playlistBooks)
    .where(eq(playlistBooks.id_playlist, id))
    .orderBy(playlistBooks.row_number);
}

export async function getPlaylistBookByIdOrderTime(id: SelectPlaylistbooks['id_playlist']) {
    return db
    .select()
    .from(playlistBooks)
    .where(eq(playlistBooks.id_playlist, id))
    .orderBy(playlistBooks.added_at);
}

export async function updatePlaylistBookById(id_playlist: SelectPlaylistbooks['id_playlist'], id_book: SelectPlaylistbooks['id_book'], data: Partial<Omit<SelectPlaylistbooks, 'id_playlist'>>) {
    const response = await db.update(playlistBooks).set(data).where(and(eq(playlistBooks.id_playlist, id_playlist), eq(playlistBooks.id_book, id_book))).returning();
    
    return response;
}

export async function deletePlaylistBooks(id_playlist: SelectPlaylistbooks['id_playlist'], id_book: SelectPlaylistbooks['id_book']) {
    const respone = await db.delete(playlistBooks).where(and(eq(playlistBooks.id_playlist, id_playlist), eq(playlistBooks.id_book, id_book))).returning();

    return respone;
}
  
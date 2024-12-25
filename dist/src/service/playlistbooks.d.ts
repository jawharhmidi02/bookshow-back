import { InsertPlaylistbooks, SelectPlaylistbooks } from '../schema/playlistbooks';
export declare function createPlaylistBook(data: InsertPlaylistbooks): Promise<{
    id_book: string;
    id_playlist: string;
    added_at: Date;
    row_number: number;
}[] | {
    msg: string;
}>;
export declare function getPlaylistBookById(id: SelectPlaylistbooks['id_playlist']): Promise<{
    id_book: string;
    id_playlist: string;
    added_at: Date;
    row_number: number;
}[]>;
export declare function getPlaylistBookByIdOrderTime(id: SelectPlaylistbooks['id_playlist']): Promise<{
    id_book: string;
    id_playlist: string;
    added_at: Date;
    row_number: number;
}[]>;
export declare function updatePlaylistBookById(id_playlist: SelectPlaylistbooks['id_playlist'], id_book: SelectPlaylistbooks['id_book'], data: Partial<Omit<SelectPlaylistbooks, 'id_playlist'>>): Promise<{
    id_book: string;
    id_playlist: string;
    added_at: Date;
    row_number: number;
}[]>;
export declare function deletePlaylistBooks(id_playlist: SelectPlaylistbooks['id_playlist'], id_book: SelectPlaylistbooks['id_book']): Promise<{
    id_book: string;
    id_playlist: string;
    added_at: Date;
    row_number: number;
}[]>;

import { InsertPlaylists, SelectPlaylists } from '../schema/playlists';
export declare function createPlaylist(data: InsertPlaylists): Promise<{
    id_user: string;
    name: string;
    created_at: Date;
    id_playlist: string;
    updated_at: Date;
}[] | {
    msg: string;
}>;
export declare function getPlaylistsById(id: SelectPlaylists['id_user']): Promise<{
    id_user: string;
    name: string;
    created_at: Date;
    id_playlist: string;
    updated_at: Date;
}[]>;
export declare function updatePlaylistById(id: SelectPlaylists['id_playlist'], data: Partial<Omit<SelectPlaylists, 'id_playlist'>>): Promise<{
    id_user: string;
    name: string;
    created_at: Date;
    id_playlist: string;
    updated_at: Date;
}[]>;
export declare function deletePlaylist(id: SelectPlaylists['id_playlist']): Promise<{
    id_user: string;
    name: string;
    created_at: Date;
    id_playlist: string;
    updated_at: Date;
}[]>;

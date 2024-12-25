export declare class playlistsController {
    create(body: {
        id_user: string;
        name: string;
    }): Promise<{
        id_user: string;
        name: string;
        created_at: Date;
        id_playlist: string;
        updated_at: Date;
    }[] | {
        msg: string;
    }>;
    retrieve(id: string): Promise<{
        id_user: string;
        name: string;
        created_at: Date;
        id_playlist: string;
        updated_at: Date;
    }[]>;
    update(id: string, body: any): Promise<{
        id_user: string;
        name: string;
        created_at: Date;
        id_playlist: string;
        updated_at: Date;
    }[]>;
    delete(id: string): Promise<{
        id_user: string;
        name: string;
        created_at: Date;
        id_playlist: string;
        updated_at: Date;
    }[]>;
}

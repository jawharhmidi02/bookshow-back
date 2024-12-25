export declare class playlistbooksController {
    create(body: {
        id_playlist: string;
        id_book: string;
        row_number: number;
    }): Promise<{
        id_book: string;
        id_playlist: string;
        added_at: Date;
        row_number: number;
    }[] | {
        msg: string;
    }>;
    retrieve(id: string): Promise<{
        id_book: string;
        id_playlist: string;
        added_at: Date;
        row_number: number;
    }[]>;
    getbytime(id: string): Promise<{
        id_book: string;
        id_playlist: string;
        added_at: Date;
        row_number: number;
    }[]>;
    update(id_playlist: string, id_book: string, body: any): Promise<{
        id_book: string;
        id_playlist: string;
        added_at: Date;
        row_number: number;
    }[]>;
    delete(id_playlist: string, id_book: string): Promise<{
        id_book: string;
        id_playlist: string;
        added_at: Date;
        row_number: number;
    }[]>;
}

export declare class ratesController {
    create(body: {
        id_user: string;
        id_book: string;
    }): Promise<{
        response: {
            id_user: string;
            id_book: string;
            rate: number;
        }[];
        msg: string;
    }>;
    retrieve(id: string): Promise<{
        value: string;
    }[]>;
}

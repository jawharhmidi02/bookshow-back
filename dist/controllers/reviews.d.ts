export declare class reviewsController {
    signup(body: {
        id_book: string;
        id_user: string;
        text: string;
    }): Promise<{
        id_user: string;
        created_at: Date;
        id_book: string;
        id_review: string;
        text: string;
    }[]>;
    signin(id: string): Promise<{
        id_user: string;
        created_at: Date;
        id_book: string;
        id_review: string;
        text: string;
    }[]>;
    count(id: string): Promise<number>;
    update(id: string, body: any): Promise<{
        id_user: string;
        created_at: Date;
        id_book: string;
        id_review: string;
        text: string;
    }[]>;
    delete(id: string): Promise<{
        id_user: string;
        created_at: Date;
        id_book: string;
        id_review: string;
        text: string;
    }[]>;
}

export declare class repliesController {
    signup(body: {
        id_review: string;
        id_user: string;
        text: string;
    }): Promise<{
        id_user: string;
        created_at: Date;
        id_review: string;
        text: string;
        id_reply: string;
    }[]>;
    signin(id: string): Promise<{
        id_user: string;
        created_at: Date;
        id_review: string;
        text: string;
        id_reply: string;
    }[]>;
    update(id: string, body: any): Promise<{
        id_user: string;
        created_at: Date;
        id_review: string;
        text: string;
        id_reply: string;
    }[]>;
    delete(id: string): Promise<{
        id_user: string;
        created_at: Date;
        id_review: string;
        text: string;
        id_reply: string;
    }[]>;
}

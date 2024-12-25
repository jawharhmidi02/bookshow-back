export declare class authorsController {
    create(body: {
        social_media: string;
        donation_link: string;
        id_user: string;
    }): Promise<{
        id_user: string;
        donation_link: string;
        social_media: unknown;
        joined_at: Date;
    }[]>;
    get(): Promise<{
        users: {
            password: string;
            id_user: string;
            email: string;
            created_at: Date;
            full_name: string;
            cover_photo: string;
        };
        authors: {
            id_user: string;
            donation_link: string;
            social_media: unknown;
            joined_at: Date;
        };
    }[]>;
    retrieve(id: string): Promise<{
        id_user: string;
        donation_link: string;
        social_media: unknown;
        joined_at: Date;
    }[]>;
    update(id: string, body: any): Promise<{
        id_user: string;
        donation_link: string;
        social_media: unknown;
        joined_at: Date;
    }[]>;
}

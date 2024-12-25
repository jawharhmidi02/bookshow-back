import { InsertAuthors, SelectAuthors } from '../schema/authors';
export declare function createAuthor(data: InsertAuthors): Promise<{
    id_user: string;
    donation_link: string;
    social_media: unknown;
    joined_at: Date;
}[]>;
export declare function getAuthorById(id: SelectAuthors['id_user']): Promise<{
    id_user: string;
    donation_link: string;
    social_media: unknown;
    joined_at: Date;
}[]>;
export declare function getAuthors(): Promise<{
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
export declare function updateAuthorById(id: SelectAuthors['id_user'], data: Partial<Omit<SelectAuthors, 'id_author'>>): Promise<{
    id_user: string;
    donation_link: string;
    social_media: unknown;
    joined_at: Date;
}[]>;

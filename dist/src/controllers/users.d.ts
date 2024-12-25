export declare class usersController {
    signup(body: {
        email: string;
        password: string;
        full_name: string;
    }): Promise<{
        password: string;
        id_user: string;
        email: string;
        created_at: Date;
        full_name: string;
        cover_photo: string;
    }[]>;
    signin(email: string, password: string): Promise<{
        password: string;
        id_user: string;
        email: string;
        created_at: Date;
        full_name: string;
        cover_photo: string;
    }[]>;
    delete(id: string): Promise<{
        password: string;
        id_user: string;
        email: string;
        created_at: Date;
        full_name: string;
        cover_photo: string;
    }[]>;
    update(id: string, body: any): Promise<{
        password: string;
        id_user: string;
        email: string;
        created_at: Date;
        full_name: string;
        cover_photo: string;
    }[]>;
    updatePfp(id: string, file: any): Promise<{
        password: string;
        id_user: string;
        email: string;
        created_at: Date;
        full_name: string;
        cover_photo: string;
    }[]>;
}

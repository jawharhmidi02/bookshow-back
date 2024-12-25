import { InsertUsers, SelectUsers } from '../schema/users';
export declare function createUser(data: InsertUsers): Promise<{
    password: string;
    id_user: string;
    email: string;
    created_at: Date;
    full_name: string;
    cover_photo: string;
}[]>;
export declare function getUserByEmail(email: SelectUsers['email'], password: SelectUsers['password']): Promise<{
    password: string;
    id_user: string;
    email: string;
    created_at: Date;
    full_name: string;
    cover_photo: string;
}[]>;
export declare function updateUserById(id: SelectUsers['id_user'], data: Partial<Omit<SelectUsers, 'id_user'>>): Promise<{
    password: string;
    id_user: string;
    email: string;
    created_at: Date;
    full_name: string;
    cover_photo: string;
}[]>;
export declare function updateUserPfpById(id: SelectUsers['id_user'], file: any): Promise<{
    password: string;
    id_user: string;
    email: string;
    created_at: Date;
    full_name: string;
    cover_photo: string;
}[]>;
export declare function deleteUser(id: SelectUsers['id_user']): Promise<{
    password: string;
    id_user: string;
    email: string;
    created_at: Date;
    full_name: string;
    cover_photo: string;
}[]>;

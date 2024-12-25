export declare class booksController {
    create(body: {
        title: string;
        description: string;
        pdf_url: string;
        id_user: string;
        category: string;
        genre: string;
    }): Promise<{
        id_user: string;
        created_at: Date;
        description: string;
        id_book: string;
        title: string;
        pdf_url: string;
        category: string;
        genre: string;
        cover_url: string;
        author: string;
    }[]>;
    get(): Promise<{
        id_user: string;
        created_at: Date;
        description: string;
        id_book: string;
        title: string;
        pdf_url: string;
        category: string;
        genre: string;
        cover_url: string;
        author: string;
    }[]>;
    orderCategory(category: string): Promise<{
        id_user: string;
        created_at: Date;
        description: string;
        id_book: string;
        title: string;
        pdf_url: string;
        category: string;
        genre: string;
        cover_url: string;
        author: string;
    }[]>;
    orderTime(): Promise<{
        id_user: string;
        created_at: Date;
        description: string;
        id_book: string;
        title: string;
        pdf_url: string;
        category: string;
        genre: string;
        cover_url: string;
        author: string;
    }[]>;
    orderGenre(genre: string): Promise<{
        id_user: string;
        created_at: Date;
        description: string;
        id_book: string;
        title: string;
        pdf_url: string;
        category: string;
        genre: string;
        cover_url: string;
        author: string;
    }[]>;
    retrieve(id: string): Promise<{
        id_user: string;
        created_at: Date;
        description: string;
        id_book: string;
        title: string;
        pdf_url: string;
        category: string;
        genre: string;
        cover_url: string;
        author: string;
    }[]>;
    retrieveuserbooks(id: string): Promise<{
        id_user: string;
        created_at: Date;
        description: string;
        id_book: string;
        title: string;
        pdf_url: string;
        category: string;
        genre: string;
        cover_url: string;
        author: string;
    }[]>;
    update(id: string, body: any): Promise<{
        id_user: string;
        created_at: Date;
        description: string;
        id_book: string;
        title: string;
        pdf_url: string;
        category: string;
        genre: string;
        cover_url: string;
        author: string;
    }[]>;
    delete(id: string): Promise<{
        id_user: string;
        created_at: Date;
        description: string;
        id_book: string;
        title: string;
        pdf_url: string;
        category: string;
        genre: string;
        cover_url: string;
        author: string;
    }[]>;
    updateCover(id: string, file: any): Promise<{
        id_user: string;
        created_at: Date;
        description: string;
        id_book: string;
        title: string;
        pdf_url: string;
        category: string;
        genre: string;
        cover_url: string;
        author: string;
    }[]>;
    updatePdf(id: string, file: any): Promise<{
        id_user: string;
        created_at: Date;
        description: string;
        id_book: string;
        title: string;
        pdf_url: string;
        category: string;
        genre: string;
        cover_url: string;
        author: string;
    }[]>;
}

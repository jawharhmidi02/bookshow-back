import { InsertReviews, SelectReviews } from '../schema/reviews';
export declare function createReview(data: InsertReviews): Promise<{
    id_user: string;
    created_at: Date;
    id_book: string;
    id_review: string;
    text: string;
}[]>;
export declare function getReviewsByBookId(id: SelectReviews['id_book']): Promise<{
    id_user: string;
    created_at: Date;
    id_book: string;
    id_review: string;
    text: string;
}[]>;
export declare function getNumReviewsByBookId(id: SelectReviews['id_book']): Promise<number>;
export declare function updateReviewById(id: SelectReviews['id_review'], data: Partial<Omit<SelectReviews, 'id_review'>>): Promise<{
    id_user: string;
    created_at: Date;
    id_book: string;
    id_review: string;
    text: string;
}[]>;
export declare function deleteReview(id: SelectReviews['id_review']): Promise<{
    id_user: string;
    created_at: Date;
    id_book: string;
    id_review: string;
    text: string;
}[]>;

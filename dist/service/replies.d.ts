import { InsertReplies, SelectReplies } from '../schema/replies';
export declare function createReply(data: InsertReplies): Promise<{
    id_user: string;
    created_at: Date;
    id_review: string;
    text: string;
    id_reply: string;
}[]>;
export declare function getRepliesByReviewId(id: SelectReplies['id_user']): Promise<{
    id_user: string;
    created_at: Date;
    id_review: string;
    text: string;
    id_reply: string;
}[]>;
export declare function updateReplyById(id: SelectReplies['id_reply'], data: Partial<Omit<SelectReplies, 'id_reply'>>): Promise<{
    id_user: string;
    created_at: Date;
    id_review: string;
    text: string;
    id_reply: string;
}[]>;
export declare function deleteReply(id: SelectReplies['id_reply']): Promise<{
    id_user: string;
    created_at: Date;
    id_review: string;
    text: string;
    id_reply: string;
}[]>;

import { db } from '../db/connect';
import { InsertReplies, replies, SelectReplies } from '../schema/replies';
import { eq } from 'drizzle-orm';

export async function createReply(data: InsertReplies) {
    const response = await db.insert(replies).values(data).returning();
    
    return response;
}

export async function getRepliesByReviewId(id: SelectReplies['id_user']) {
    return db
    .select()
    .from(replies)
    .where(eq(replies.id_review, id))
    .orderBy(replies.created_at);
}

export async function updateReplyById(id: SelectReplies['id_reply'], data: Partial<Omit<SelectReplies, 'id_reply'>>) {
    const response = await db.update(replies).set(data).where(eq(replies.id_reply, id)).returning();
    
    return response;
}

export async function deleteReply(id: SelectReplies['id_reply']) {
    const respone = await db.delete(replies).where(eq(replies.id_reply, id)).returning();

    return respone;
}
  
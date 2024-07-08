import { db } from '../db/connect';
import { InsertReviews, reviews, SelectReviews } from '../schema/reviews';
import { and, count, eq } from 'drizzle-orm';
import { replies } from 'src/schema/replies';

export async function createReview(data: InsertReviews) {
    const response = await db.insert(reviews).values(data).returning();
    
    return response;
}

export async function getReviewsByBookId(id: SelectReviews['id_book']) {
    return db
    .select()
    .from(reviews)
    .where(eq(reviews.id_book, id))
    .orderBy(reviews.created_at);
}

export async function getNumReviewsByBookId(id: SelectReviews['id_book']) {
    const reviewsCount = await db
        .select({value: count(reviews.id_review)})
        .from(reviews)
        .where(eq(reviews.id_book, id))
    
    const repliesCount = await db
        .select({value: count(replies.id_reply)})
        .from(replies)
        .innerJoin(reviews, eq(reviews.id_review, replies.id_review))
        .where(and(eq(reviews.id_book, id), eq(reviews.id_review, replies.id_review)))

    const totalReviewsAndReplies = (reviewsCount[0].value || 0) + (repliesCount[0].value || 0);
    
    return totalReviewsAndReplies;
}

export async function updateReviewById(id: SelectReviews['id_review'], data: Partial<Omit<SelectReviews, 'id_review'>>) {
    const response = await db.update(reviews).set(data).where(eq(reviews.id_review, id)).returning();
    
    return response;
}

export async function deleteReview(id: SelectReviews['id_review']) {
    const respone = await db.delete(reviews).where(eq(reviews.id_review, id)).returning();

    return respone;
}
  
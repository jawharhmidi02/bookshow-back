"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createReview = createReview;
exports.getReviewsByBookId = getReviewsByBookId;
exports.getNumReviewsByBookId = getNumReviewsByBookId;
exports.updateReviewById = updateReviewById;
exports.deleteReview = deleteReview;
const connect_1 = require("../db/connect");
const reviews_1 = require("../schema/reviews");
const drizzle_orm_1 = require("drizzle-orm");
const replies_1 = require("../schema/replies");
async function createReview(data) {
    const response = await connect_1.db.insert(reviews_1.reviews).values(data).returning();
    return response;
}
async function getReviewsByBookId(id) {
    return connect_1.db
        .select()
        .from(reviews_1.reviews)
        .where((0, drizzle_orm_1.eq)(reviews_1.reviews.id_book, id))
        .orderBy(reviews_1.reviews.created_at);
}
async function getNumReviewsByBookId(id) {
    const reviewsCount = await connect_1.db
        .select({ value: (0, drizzle_orm_1.count)(reviews_1.reviews.id_review) })
        .from(reviews_1.reviews)
        .where((0, drizzle_orm_1.eq)(reviews_1.reviews.id_book, id));
    const repliesCount = await connect_1.db
        .select({ value: (0, drizzle_orm_1.count)(replies_1.replies.id_reply) })
        .from(replies_1.replies)
        .innerJoin(reviews_1.reviews, (0, drizzle_orm_1.eq)(reviews_1.reviews.id_review, replies_1.replies.id_review))
        .where((0, drizzle_orm_1.and)((0, drizzle_orm_1.eq)(reviews_1.reviews.id_book, id), (0, drizzle_orm_1.eq)(reviews_1.reviews.id_review, replies_1.replies.id_review)));
    const totalReviewsAndReplies = (reviewsCount[0].value || 0) + (repliesCount[0].value || 0);
    return totalReviewsAndReplies;
}
async function updateReviewById(id, data) {
    const response = await connect_1.db.update(reviews_1.reviews).set(data).where((0, drizzle_orm_1.eq)(reviews_1.reviews.id_review, id)).returning();
    return response;
}
async function deleteReview(id) {
    const respone = await connect_1.db.delete(reviews_1.reviews).where((0, drizzle_orm_1.eq)(reviews_1.reviews.id_review, id)).returning();
    return respone;
}
//# sourceMappingURL=reviews.js.map
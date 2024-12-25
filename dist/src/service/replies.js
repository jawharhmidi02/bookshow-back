"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createReply = createReply;
exports.getRepliesByReviewId = getRepliesByReviewId;
exports.updateReplyById = updateReplyById;
exports.deleteReply = deleteReply;
const connect_1 = require("../db/connect");
const replies_1 = require("../schema/replies");
const drizzle_orm_1 = require("drizzle-orm");
async function createReply(data) {
    const response = await connect_1.db.insert(replies_1.replies).values(data).returning();
    return response;
}
async function getRepliesByReviewId(id) {
    return connect_1.db
        .select()
        .from(replies_1.replies)
        .where((0, drizzle_orm_1.eq)(replies_1.replies.id_review, id))
        .orderBy(replies_1.replies.created_at);
}
async function updateReplyById(id, data) {
    const response = await connect_1.db.update(replies_1.replies).set(data).where((0, drizzle_orm_1.eq)(replies_1.replies.id_reply, id)).returning();
    return response;
}
async function deleteReply(id) {
    const respone = await connect_1.db.delete(replies_1.replies).where((0, drizzle_orm_1.eq)(replies_1.replies.id_reply, id)).returning();
    return respone;
}
//# sourceMappingURL=replies.js.map
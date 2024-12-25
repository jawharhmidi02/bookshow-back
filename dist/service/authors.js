"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAuthor = createAuthor;
exports.getAuthorById = getAuthorById;
exports.getAuthors = getAuthors;
exports.updateAuthorById = updateAuthorById;
const connect_1 = require("../db/connect");
const authors_1 = require("../schema/authors");
const drizzle_orm_1 = require("drizzle-orm");
const users_1 = require("../schema/users");
async function createAuthor(data) {
    const response = await connect_1.db.insert(authors_1.authors).values(data).returning();
    return response;
}
async function getAuthorById(id) {
    return connect_1.db.select().from(authors_1.authors).where((0, drizzle_orm_1.eq)(authors_1.authors.id_user, id));
}
async function getAuthors() {
    return connect_1.db
        .select()
        .from(authors_1.authors)
        .innerJoin(users_1.users, (0, drizzle_orm_1.eq)(authors_1.authors.id_user, users_1.users.id_user))
        .orderBy((0, drizzle_orm_1.asc)(users_1.users.full_name));
}
async function updateAuthorById(id, data) {
    const response = await connect_1.db.update(authors_1.authors).set(data).where((0, drizzle_orm_1.eq)(authors_1.authors.id_user, id)).returning();
    return response;
}
//# sourceMappingURL=authors.js.map
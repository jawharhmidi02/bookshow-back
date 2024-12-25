"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBook = createBook;
exports.getBookById = getBookById;
exports.getBookByUserId = getBookByUserId;
exports.getBooks = getBooks;
exports.getBooksOrderCategory = getBooksOrderCategory;
exports.getBooksOrderTime = getBooksOrderTime;
exports.getBooksOrderGenre = getBooksOrderGenre;
exports.getBookLikesById = getBookLikesById;
exports.updateBookById = updateBookById;
exports.deleteBook = deleteBook;
exports.updateBookCoverById = updateBookCoverById;
exports.updateBookPdfUrlById = updateBookPdfUrlById;
const connect_1 = require("../db/connect");
const books_1 = require("../schema/books");
const drizzle_orm_1 = require("drizzle-orm");
const cloudinary_1 = require("cloudinary");
async function createBook(data) {
    const response = await connect_1.db.insert(books_1.books).values(data).returning();
    return response;
}
async function getBookById(id) {
    return connect_1.db.select().from(books_1.books).where((0, drizzle_orm_1.eq)(books_1.books.id_book, id));
}
async function getBookByUserId(id) {
    return connect_1.db.select().from(books_1.books).where((0, drizzle_orm_1.eq)(books_1.books.id_user, id));
}
async function getBooks() {
    return connect_1.db.select().from(books_1.books).orderBy((0, drizzle_orm_1.asc)(books_1.books.title));
}
async function getBooksOrderCategory(category) {
    return connect_1.db
        .select()
        .from(books_1.books)
        .where((0, drizzle_orm_1.like)(books_1.books.category, `%${category}%`))
        .orderBy((0, drizzle_orm_1.asc)(books_1.books.title));
}
async function getBooksOrderTime() {
    return connect_1.db.select().from(books_1.books).orderBy((0, drizzle_orm_1.asc)(books_1.books.created_at));
}
async function getBooksOrderGenre(genre) {
    return connect_1.db
        .select()
        .from(books_1.books)
        .where((0, drizzle_orm_1.like)(books_1.books.genre, `%${genre}%`))
        .orderBy((0, drizzle_orm_1.asc)(books_1.books.title));
}
async function getBookLikesById(id) {
    return connect_1.db.select().from(books_1.books).where((0, drizzle_orm_1.eq)(books_1.books.id_book, id));
}
async function updateBookById(id, data) {
    const response = await connect_1.db
        .update(books_1.books)
        .set(data)
        .where((0, drizzle_orm_1.eq)(books_1.books.id_book, id))
        .returning();
    return response;
}
async function deleteBook(id) {
    const respone = await connect_1.db
        .delete(books_1.books)
        .where((0, drizzle_orm_1.eq)(books_1.books.id_book, id))
        .returning();
    return respone;
}
async function updateBookCoverById(id, file) {
    cloudinary_1.v2.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
    });
    const uploadResult = await new Promise((resolve, reject) => {
        cloudinary_1.v2.uploader
            .upload_stream({ folder: 'recipevault' }, (error, result) => {
            if (error)
                return reject(error);
            resolve(result);
        })
            .end(file.buffer);
    });
    const dbResponse = await connect_1.db
        .update(books_1.books)
        .set({ cover_url: uploadResult.secure_url })
        .where((0, drizzle_orm_1.eq)(books_1.books.id_book, id))
        .returning();
    return dbResponse;
}
async function updateBookPdfUrlById(id, file) {
    cloudinary_1.v2.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
    });
    const uploadResult = await new Promise((resolve, reject) => {
        cloudinary_1.v2.uploader
            .upload_stream({ folder: 'recipevault' }, (error, result) => {
            if (error)
                return reject(error);
            resolve(result);
        })
            .end(file.buffer);
    });
    const dbResponse = await connect_1.db
        .update(books_1.books)
        .set({ pdf_url: uploadResult.secure_url })
        .where((0, drizzle_orm_1.eq)(books_1.books.id_book, id))
        .returning();
    return dbResponse;
}
//# sourceMappingURL=books.js.map
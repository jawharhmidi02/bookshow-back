import { db } from '../db/connect';
import { InsertBooks, books, SelectBooks } from '../schema/books';
import { asc, eq, like } from 'drizzle-orm';
import { v2 as cloudinary } from 'cloudinary';
import { rates } from 'src/schema/rates';

export async function createBook(data: InsertBooks) {
    const response = await db.insert(books).values(data).returning();
    return response;
}

export async function getBookById(id: SelectBooks['id_book']) {
    return db.select().from(books).where(eq(books.id_book, id));
}

export async function getBookByUserId(id: SelectBooks['id_book']) {
    return db.select().from(books).where(eq(books.id_user, id));
}

export async function getBooks() {
    return db
        .select()
        .from(books)
        .orderBy(asc(books.title))
}

export async function getBooksOrderCategory( category: String) {
    return db
        .select()
        .from(books)
        .where(like(books.category, `%${category}%`))
        .orderBy(asc(books.title))
}

export async function getBooksOrderTime() {
    return db
        .select()
        .from(books)
        .orderBy(asc(books.created_at))
}

export async function getBooksOrderGenre( genre: string ) {
    return db
        .select()
        .from(books)
        .where(like(books.genre, `%${genre}%`))
        .orderBy(asc(books.title))
}

export async function getBookLikesById(id: SelectBooks['id_book']) {
    return db.select().from(books).where(eq(books.id_book, id));
}

export async function updateBookById(id: SelectBooks['id_book'], data: Partial<Omit<SelectBooks, 'id_Book'>>) {
    const response = await db.update(books).set(data).where(eq(books.id_book, id)).returning();
    return response;
}

export async function deleteBook(id: SelectBooks['id_book']) {
    const respone = await db.delete(books).where(eq(books.id_book, id)).returning();

    return respone;
}
 
export async function updateBookCoverById(id: SelectBooks['id_book'], file: any) {
    
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
    });

    const filePath = file.path;
    const response = await cloudinary.uploader.upload(filePath, {
        folder: 'books_cover',
    });


    const dbResponse = await db.update(books).set({ cover_url: response.secure_url }).where(eq(books.id_book, id)).returning();
    return dbResponse;
}
 
export async function updateBookPdfUrlById(id: SelectBooks['id_book'], file: any) {
    
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
    });

    const filePath = file.path;
    const response = await cloudinary.uploader.upload(filePath, {
        folder: 'pdf_files',
    });


    const dbResponse = await db.update(books).set({ pdf_url: response.secure_url }).where(eq(books.id_book, id)).returning();
    return dbResponse;
}
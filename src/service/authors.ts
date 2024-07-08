import { db } from '../db/connect';
import { InsertAuthors, authors, SelectAuthors } from '../schema/authors';
import { asc, eq } from 'drizzle-orm';
import { users } from '../schema/users';

export async function createAuthor(data: InsertAuthors) {
    const response = await db.insert(authors).values(data).returning();
    return response;
}

export async function getAuthorById(id: SelectAuthors['id_user']) {
    return db.select().from(authors).where(eq(authors.id_user, id));
}

export async function getAuthors() {
    return db
        .select()
        .from(authors)
        .innerJoin(users, eq(authors.id_user, users.id_user))
        .orderBy(asc(users.full_name))
}

export async function updateAuthorById(id: SelectAuthors['id_user'], data: Partial<Omit<SelectAuthors, 'id_author'>>) {
    const response = await db.update(authors).set(data).where(eq(authors.id_user, id)).returning();

    return response;
} 
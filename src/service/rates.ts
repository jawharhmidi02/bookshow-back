import { db } from '../db/connect';
import { InsertRates, rates, SelectRates } from '../schema/rates';
import { and, eq, sum } from 'drizzle-orm';

export async function Rate(data: InsertRates) {
    const test = await db
    .select()
    .from(rates)
    .where(and(eq(rates.id_user, data.id_user), eq(rates.id_book, data.id_book)))

    if(test.length !== 0){
        const response = await db.delete(rates).where(and(eq(rates.id_user, data.id_user), eq(rates.id_book, data.id_book))).returning();
        return {response, msg: "removed"};
    }

    const response = await db.insert(rates).values(data).returning();    
    return {response, msg: "done"};
}

export async function getRates(id: SelectRates['id_book']) {
    return db
    .select({ value: sum(rates.rate)})
    .from(rates)
    .where(eq(rates.id_book, id))
}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rate = Rate;
exports.getRates = getRates;
const connect_1 = require("../db/connect");
const rates_1 = require("../schema/rates");
const drizzle_orm_1 = require("drizzle-orm");
async function Rate(data) {
    const test = await connect_1.db
        .select()
        .from(rates_1.rates)
        .where((0, drizzle_orm_1.and)((0, drizzle_orm_1.eq)(rates_1.rates.id_user, data.id_user), (0, drizzle_orm_1.eq)(rates_1.rates.id_book, data.id_book)));
    if (test.length !== 0) {
        const response = await connect_1.db.delete(rates_1.rates).where((0, drizzle_orm_1.and)((0, drizzle_orm_1.eq)(rates_1.rates.id_user, data.id_user), (0, drizzle_orm_1.eq)(rates_1.rates.id_book, data.id_book))).returning();
        return { response, msg: "removed" };
    }
    const response = await connect_1.db.insert(rates_1.rates).values(data).returning();
    return { response, msg: "done" };
}
async function getRates(id) {
    return connect_1.db
        .select({ value: (0, drizzle_orm_1.sum)(rates_1.rates.rate) })
        .from(rates_1.rates)
        .where((0, drizzle_orm_1.eq)(rates_1.rates.id_book, id));
}
//# sourceMappingURL=rates.js.map
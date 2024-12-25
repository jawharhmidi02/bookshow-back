"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rates = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const users_1 = require("./users");
const books_1 = require("./books");
exports.rates = (0, pg_core_1.pgTable)('rates', {
    id_user: (0, pg_core_1.text)('id_user').references(() => users_1.users.id_user, { onDelete: 'set null' }),
    id_book: (0, pg_core_1.text)('id_book').references(() => books_1.books.id_book, { onDelete: 'cascade' }),
    rate: (0, pg_core_1.integer)('rate').notNull()
});
//# sourceMappingURL=rates.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviews = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const books_1 = require("./books");
const users_1 = require("./users");
exports.reviews = (0, pg_core_1.pgTable)('reviews', {
    id_review: (0, pg_core_1.text)('id_review').primaryKey().$defaultFn(() => crypto.randomUUID()),
    id_book: (0, pg_core_1.text)('id_book').notNull().references(() => books_1.books.id_book, { onDelete: 'cascade' }),
    id_user: (0, pg_core_1.text)('id_user').notNull().references(() => users_1.users.id_user, { onDelete: 'cascade' }),
    text: (0, pg_core_1.text)('text'),
    created_at: (0, pg_core_1.timestamp)('created_at').defaultNow(),
});
//# sourceMappingURL=reviews.js.map
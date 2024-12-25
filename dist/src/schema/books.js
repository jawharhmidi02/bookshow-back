"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.books = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const users_1 = require("./users");
exports.books = (0, pg_core_1.pgTable)('books', {
    id_book: (0, pg_core_1.text)('id_book').primaryKey().$defaultFn(() => crypto.randomUUID()),
    title: (0, pg_core_1.varchar)('title').notNull(),
    description: (0, pg_core_1.text)('description'),
    pdf_url: (0, pg_core_1.varchar)('pdf_url').notNull(),
    id_user: (0, pg_core_1.text)('id_user').notNull().references(() => users_1.users.id_user, { onDelete: 'cascade' }),
    category: (0, pg_core_1.varchar)('category'),
    genre: (0, pg_core_1.varchar)('genre'),
    created_at: (0, pg_core_1.timestamp)('created_at').defaultNow(),
    cover_url: (0, pg_core_1.text)('cover_url').default("/_next/image?url=%2Fbookcover.jpg&w=640&q=75"),
    author: (0, pg_core_1.text)('author').default('Anonymous')
});
//# sourceMappingURL=books.js.map
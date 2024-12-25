"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replies = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const reviews_1 = require("./reviews");
const users_1 = require("./users");
exports.replies = (0, pg_core_1.pgTable)('replies', {
    id_reply: (0, pg_core_1.text)('id_reply').primaryKey().$defaultFn(() => crypto.randomUUID()),
    id_review: (0, pg_core_1.text)('id_review').notNull().references(() => reviews_1.reviews.id_review, { onDelete: 'cascade' }),
    id_user: (0, pg_core_1.text)('id_user').notNull().references(() => users_1.users.id_user, { onDelete: 'cascade' }),
    text: (0, pg_core_1.text)('text'),
    created_at: (0, pg_core_1.timestamp)('created_at').defaultNow(),
});
//# sourceMappingURL=replies.js.map
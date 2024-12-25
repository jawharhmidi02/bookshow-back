"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authors = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const users_1 = require("./users");
exports.authors = (0, pg_core_1.pgTable)('authors', {
    id_user: (0, pg_core_1.text)('id_user').primaryKey().references(() => users_1.users.id_user, { onDelete: 'cascade' }),
    donation_link: (0, pg_core_1.varchar)('donation_link'),
    social_media: (0, pg_core_1.jsonb)('social_media'),
    joined_at: (0, pg_core_1.timestamp)('joined_at').defaultNow(),
});
//# sourceMappingURL=authors.js.map
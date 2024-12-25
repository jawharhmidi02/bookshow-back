"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.users = (0, pg_core_1.pgTable)('users', {
    id_user: (0, pg_core_1.text)('id_user').primaryKey().$defaultFn(() => crypto.randomUUID()),
    email: (0, pg_core_1.varchar)('email').unique().notNull(),
    password: (0, pg_core_1.varchar)('password').notNull(),
    created_at: (0, pg_core_1.timestamp)('created_at').defaultNow(),
    full_name: (0, pg_core_1.text)('full_name').notNull(),
    cover_photo: (0, pg_core_1.text)('cover_photo').default("https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg")
});
//# sourceMappingURL=users.js.map
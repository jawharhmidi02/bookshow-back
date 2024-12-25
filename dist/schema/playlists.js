"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.playlists = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const users_1 = require("./users");
exports.playlists = (0, pg_core_1.pgTable)('playlists', {
    id_playlist: (0, pg_core_1.text)('id_playlist').primaryKey().$defaultFn(() => crypto.randomUUID()),
    id_user: (0, pg_core_1.text)('id_user').notNull().references(() => users_1.users.id_user, { onDelete: 'cascade' }),
    name: (0, pg_core_1.varchar)('name').notNull(),
    created_at: (0, pg_core_1.timestamp)('created_at').defaultNow(),
    updated_at: (0, pg_core_1.timestamp)('updated_at').defaultNow().$onUpdate(() => new Date())
});
//# sourceMappingURL=playlists.js.map
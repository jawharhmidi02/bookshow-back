"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const dotenv_1 = require("dotenv");
const postgres_js_1 = require("drizzle-orm/postgres-js");
const postgres = require("postgres");
(0, dotenv_1.config)({ path: '.env' });
if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is not defined in the environment variables.');
}
const client = postgres(process.env.DATABASE_URL);
exports.db = (0, postgres_js_1.drizzle)(client);
//# sourceMappingURL=connect.js.map
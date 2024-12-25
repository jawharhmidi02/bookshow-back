export declare const replies: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "replies";
    schema: undefined;
    columns: {
        id_reply: import("drizzle-orm/pg-core").PgColumn<{
            name: "id_reply";
            tableName: "replies";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        id_review: import("drizzle-orm/pg-core").PgColumn<{
            name: "id_review";
            tableName: "replies";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        id_user: import("drizzle-orm/pg-core").PgColumn<{
            name: "id_user";
            tableName: "replies";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        text: import("drizzle-orm/pg-core").PgColumn<{
            name: "text";
            tableName: "replies";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        created_at: import("drizzle-orm/pg-core").PgColumn<{
            name: "created_at";
            tableName: "replies";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: false;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
export type InsertReplies = typeof replies.$inferInsert;
export type SelectReplies = typeof replies.$inferSelect;

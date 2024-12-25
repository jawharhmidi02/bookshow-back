export declare const reviews: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "reviews";
    schema: undefined;
    columns: {
        id_review: import("drizzle-orm/pg-core").PgColumn<{
            name: "id_review";
            tableName: "reviews";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        id_book: import("drizzle-orm/pg-core").PgColumn<{
            name: "id_book";
            tableName: "reviews";
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
            tableName: "reviews";
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
            tableName: "reviews";
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
            tableName: "reviews";
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
export type InsertReviews = typeof reviews.$inferInsert;
export type SelectReviews = typeof reviews.$inferSelect;

export declare const books: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "books";
    schema: undefined;
    columns: {
        id_book: import("drizzle-orm/pg-core").PgColumn<{
            name: "id_book";
            tableName: "books";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        title: import("drizzle-orm/pg-core").PgColumn<{
            name: "title";
            tableName: "books";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        description: import("drizzle-orm/pg-core").PgColumn<{
            name: "description";
            tableName: "books";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        pdf_url: import("drizzle-orm/pg-core").PgColumn<{
            name: "pdf_url";
            tableName: "books";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        id_user: import("drizzle-orm/pg-core").PgColumn<{
            name: "id_user";
            tableName: "books";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        category: import("drizzle-orm/pg-core").PgColumn<{
            name: "category";
            tableName: "books";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        genre: import("drizzle-orm/pg-core").PgColumn<{
            name: "genre";
            tableName: "books";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        created_at: import("drizzle-orm/pg-core").PgColumn<{
            name: "created_at";
            tableName: "books";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: false;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        cover_url: import("drizzle-orm/pg-core").PgColumn<{
            name: "cover_url";
            tableName: "books";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: true;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        author: import("drizzle-orm/pg-core").PgColumn<{
            name: "author";
            tableName: "books";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: true;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
export type InsertBooks = typeof books.$inferInsert;
export type SelectBooks = typeof books.$inferSelect;

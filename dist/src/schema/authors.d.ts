export declare const authors: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "authors";
    schema: undefined;
    columns: {
        id_user: import("drizzle-orm/pg-core").PgColumn<{
            name: "id_user";
            tableName: "authors";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        donation_link: import("drizzle-orm/pg-core").PgColumn<{
            name: "donation_link";
            tableName: "authors";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        social_media: import("drizzle-orm/pg-core").PgColumn<{
            name: "social_media";
            tableName: "authors";
            dataType: "json";
            columnType: "PgJsonb";
            data: unknown;
            driverParam: unknown;
            notNull: false;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        joined_at: import("drizzle-orm/pg-core").PgColumn<{
            name: "joined_at";
            tableName: "authors";
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
export type InsertAuthors = typeof authors.$inferInsert;
export type SelectAuthors = typeof authors.$inferSelect;

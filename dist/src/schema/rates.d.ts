export declare const rates: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "rates";
    schema: undefined;
    columns: {
        id_user: import("drizzle-orm/pg-core").PgColumn<{
            name: "id_user";
            tableName: "rates";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        id_book: import("drizzle-orm/pg-core").PgColumn<{
            name: "id_book";
            tableName: "rates";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        rate: import("drizzle-orm/pg-core").PgColumn<{
            name: "rate";
            tableName: "rates";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
export type InsertRates = typeof rates.$inferInsert;
export type SelectRates = typeof rates.$inferSelect;

export declare const playlistBooks: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "playlist_books";
    schema: undefined;
    columns: {
        id_playlist: import("drizzle-orm/pg-core").PgColumn<{
            name: "id_playlist";
            tableName: "playlist_books";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        id_book: import("drizzle-orm/pg-core").PgColumn<{
            name: "id_book";
            tableName: "playlist_books";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        added_at: import("drizzle-orm/pg-core").PgColumn<{
            name: "added_at";
            tableName: "playlist_books";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: false;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        row_number: import("drizzle-orm/pg-core").PgColumn<{
            name: "row_number";
            tableName: "playlist_books";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: false;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
export type InsertPlaylistbooks = typeof playlistBooks.$inferInsert;
export type SelectPlaylistbooks = typeof playlistBooks.$inferSelect;

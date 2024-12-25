"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const drizzle_module_1 = require("./drizzle/drizzle.module");
const users_1 = require("./modules/users");
const authors_1 = require("./modules/authors");
const books_1 = require("./modules/books");
const playlistbooks_1 = require("./modules/playlistbooks");
const playlists_1 = require("./modules/playlists");
const rates_1 = require("./modules/rates");
const replies_1 = require("./modules/replies");
const reviews_1 = require("./modules/reviews");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            users_1.usersModule,
            authors_1.authorsModule,
            books_1.booksModule,
            playlistbooks_1.playlistBooksModule,
            playlists_1.playlistsModule,
            rates_1.ratesModule,
            replies_1.repliesModule,
            reviews_1.reviewsModule,
            drizzle_module_1.DrizzleModule
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map
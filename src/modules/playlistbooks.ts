import { Module } from "@nestjs/common";
import { playlistbooksController } from "../controllers/playlistbooks";
@Module({
    controllers: [playlistbooksController],
    providers: []
})
export class playlistBooksModule {} 
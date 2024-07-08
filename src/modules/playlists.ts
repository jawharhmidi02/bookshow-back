import { Module } from "@nestjs/common";
import { playlistsController } from "../controllers/playlists";
@Module({
    controllers: [playlistsController],
    providers: []
})
export class playlistsModule {} 
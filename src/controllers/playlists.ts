import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { createPlaylist, deletePlaylist, getPlaylistsById, updatePlaylistById } from "../service/playlists";

@Controller('playlists')
export class playlistsController {
    @Post()
    async create(@Body() body: { id_user: string, name: string }){
        return createPlaylist(body)
    }

    @Get('/byid/:id')
    async retrieve(@Param('id') id: string) {
        return getPlaylistsById(id);
    }

    @Patch('/:id')
    async update(@Param('id') id: string, @Body() body: any){
        return updatePlaylistById(id, body);
    }

    @Delete('/:id')
    async delete(@Param('id') id: string){
        return deletePlaylist(id);
    }
}
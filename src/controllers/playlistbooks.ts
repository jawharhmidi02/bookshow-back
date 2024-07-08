import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { createPlaylistBook, deletePlaylistBooks, getPlaylistBookById, getPlaylistBookByIdOrderTime, updatePlaylistBookById } from "../service/playlistbooks";

@Controller('playlistbooks')
export class playlistbooksController {
    @Post()
    async create(@Body() body: { id_playlist: string, id_book: string, row_number: number }){
        return createPlaylistBook(body)
    }

    @Get('/byid/:id')
    async retrieve(@Param('id') id: string) {
        return getPlaylistBookById(id);
    }
    
    @Get('/byid/time/:id')
    async getbytime(@Param('id') id: string) {
        return getPlaylistBookByIdOrderTime(id);
    }

    @Patch('/:id_playlist&:id_book')
    async update(@Param('id_playlist') id_playlist: string, @Param('id_book') id_book: string, @Body() body: any){
        return updatePlaylistBookById(id_playlist, id_book, body);
    }

    @Delete('/:id_playlist&:id_book')
    async delete(@Param('id_playlist') id_playlist: string, @Param('id_book') id_book: string){
        return deletePlaylistBooks(id_playlist, id_book);
    }
}
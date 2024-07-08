import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { createAuthor, getAuthorById, getAuthors, updateAuthorById } from "../service/authors";

@Controller('authors')
export class authorsController {
    @Post()
    async create(@Body() body: { social_media: string, donation_link: string, id_user: string }){
        return createAuthor(body)
    }

    @Get()
    async get() {
        return getAuthors();
    }
    
    @Get('/byid/:id')
    async retrieve(@Param('id') id: string) {
        return getAuthorById(id);
    }

    @Patch('/:id')
    async update(@Param('id') id: string, @Body() body: any){
        return updateAuthorById(id, body);
    }
}
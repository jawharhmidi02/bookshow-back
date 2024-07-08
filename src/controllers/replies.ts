import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { createReply, getRepliesByReviewId, updateReplyById, deleteReply } from "../service/replies";

@Controller('replies')
export class repliesController {

    @Post()
    async signup(@Body() body: { id_review: string; id_user: string, text: string }){

        return createReply(body)
    }

    @Get('/:id')
    async signin(@Param('id') id: string) {
        return getRepliesByReviewId(id);
    }

    @Patch('/:id')
    async update(@Param('id') id: string, @Body() body: any){
        return updateReplyById(id, body);
    }

    @Delete('/:id')
    async delete(@Param('id') id: string){
        return deleteReply(id);
    }
   
}
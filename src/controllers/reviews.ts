import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { createReview, deleteReview, getNumReviewsByBookId, getReviewsByBookId, updateReviewById } from "../service/reviews";

@Controller('reviews')
export class reviewsController {

    @Post()
    async signup(@Body() body: { id_book: string; id_user: string, text: string }){

        return createReview(body)
    }

    @Get('/:id')
    async signin(@Param('id') id: string) {
        return getReviewsByBookId(id);
    }

    @Get('/count/:id')
    async count(@Param('id') id: string) {
        return getNumReviewsByBookId(id);
    }

    @Patch('/:id')
    async update(@Param('id') id: string, @Body() body: any){
        return updateReviewById(id, body);
    }

    @Delete('/:id')
    async delete(@Param('id') id: string){
        return deleteReview(id);
    }
   
}
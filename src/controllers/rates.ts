import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { Rate, getRates } from "../service/rates";

@Controller('rates')
export class ratesController {
    @Post()
    async create(@Body() body: { id_user: string, id_book: string }){
        return Rate({...body, rate: 1})
    }

    @Get('/byid/:id')
    async retrieve(@Param('id') id: string) {
        return getRates(id);
    }
}
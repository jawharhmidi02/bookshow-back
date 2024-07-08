import { Module } from "@nestjs/common";
import { booksController } from "../controllers/books";
@Module({
    controllers: [booksController],
    providers: []
})
export class booksModule {} 
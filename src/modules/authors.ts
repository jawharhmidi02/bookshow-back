import { Module } from "@nestjs/common";
import { authorsController } from "../controllers/authors";
@Module({
    controllers: [authorsController],
    providers: []
})
export class authorsModule {} 
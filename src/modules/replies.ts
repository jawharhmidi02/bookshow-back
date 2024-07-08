import { Module } from "@nestjs/common";
import { repliesController } from "../controllers/replies";
@Module({
    controllers: [repliesController],
    providers: []
})
export class repliesModule {} 
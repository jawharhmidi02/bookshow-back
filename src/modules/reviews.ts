import { Module } from "@nestjs/common";
import { reviewsController } from "../controllers/reviews";
@Module({
    controllers: [reviewsController],
    providers: []
})
export class reviewsModule {} 
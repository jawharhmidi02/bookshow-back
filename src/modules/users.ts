import { Module } from "@nestjs/common";
import { usersController } from "../controllers/users";
@Module({
    controllers: [usersController],
    providers: []
})
export class usersModule {} 
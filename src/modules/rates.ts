import { Module } from "@nestjs/common";
import { ratesController } from "../controllers/rates";
@Module({
    controllers: [ratesController],
    providers: []
})
export class ratesModule {} 
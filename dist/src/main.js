"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    const PORT = process.env.PORT || 5001;
    console.log("Server is listening on ", PORT);
    await app.listen(PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const PORT = process.env.PORT || 5001;
  console.log("Server is listening on ",PORT)
  await app.listen(PORT);
}
bootstrap();

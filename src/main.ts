import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);

console.log('MONGODB_USER:', process.env.MONGODB_USER);
console.log('MONGODB_PASSWORD:', process.env.MONGODB_PASSWORD);
console.log('MONGODB_HOST:', process.env.MONGODB_HOST);

app.enableCors({
  origin: 'http://localhost:5173', 
  credentials: true, 
});


  const config = new DocumentBuilder()
    .setTitle('Easy Gen Auth API')
    .setDescription('The API documentation for auth app')
    .setVersion('1.0')
    .addTag('auth')
    .addBearerAuth()
    .build();


  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

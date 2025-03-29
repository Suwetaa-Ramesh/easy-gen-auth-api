"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const dotenv = require("dotenv");
async function bootstrap() {
    dotenv.config();
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    console.log('MONGODB_USER:', process.env.MONGODB_USER);
    console.log('MONGODB_PASSWORD:', process.env.MONGODB_PASSWORD);
    console.log('MONGODB_HOST:', process.env.MONGODB_HOST);
    app.enableCors({
        origin: 'http://localhost:5173',
        credentials: true,
    });
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Easy Gen Auth API')
        .setDescription('The API documentation for auth app')
        .setVersion('1.0')
        .addTag('auth')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import cookieParser from "cookie-parser";
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
app.setGlobalPrefix('/api')
app.use(cookieParser());
app.enableCors({
origin: "http://localhost:3000",
credentials: true,
methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
allowedHeaders: "Content-Type, Accept, Authorization",
});
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Strips away any properties that aren't in the DTO
      forbidNonWhitelisted: true, // Throws an error if extra properties are sent
      transform: true, // Automatically transforms payloads to be objects typed to their DTO classes
    }),
  );
  // ✅ Correct — this is a Filter
  // app.useGlobalFilters(new GlobalExceptionFilter());

  // ✅ Correct — this is an Interceptor
  // app.useGlobalInterceptors(new ResponseInterceptor());
  await app.listen(process.env.PORT ?? 8000);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import fastifyCompress from '@fastify/compress';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  // Gunakan Fastify adapter
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: true }),
  );
  // Enable compression
  await app.register(fastifyCompress);
  app.enableCors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  });
  // Di main.ts
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Hapus property yang tidak ada di DTO
      forbidNonWhitelisted: true, // Error jika ada property tambahan
      transform: true, // Auto transform types
      transformOptions: {
        enableImplicitConversion: true, // Kurangi transform manual
      },
    }),
  );
  await app.listen(process.env.PORT ?? 3000, '0.0.0.0');
}
bootstrap();

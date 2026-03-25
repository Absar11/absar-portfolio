import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Enable CORS for frontend integration
  const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3000';
  app.enableCors({
    origin: [frontendUrl, frontendUrl.replace(/\/$/, '')],
    credentials: true,
  });

  // Set global prefix for API routes
  app.setGlobalPrefix('api');

  await app.listen(process.env.PORT || 3001);
  console.log(`Backend is running on: ${await app.getUrl()}`);
}
bootstrap();

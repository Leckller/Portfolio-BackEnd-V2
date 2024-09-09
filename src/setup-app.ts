import { INestApplication, ValidationPipe } from '@nestjs/common';

export default function setupApp(app: INestApplication<any>) {
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
}

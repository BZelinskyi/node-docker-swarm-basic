import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';

export const InstanceId = Math.random() * 100;

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  console.log(`run with instance id`, InstanceId);
  await app.listen(3000, '0.0.0.0');
}
bootstrap();

// $ docker exec -it e46c3c6c93af /bin/sh             

// /app # netstat -tuln | grep 3000
// tcp        0      0 127.0.0.1:3000          0.0.0.0:*               LISTEN      
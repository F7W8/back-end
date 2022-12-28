import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs';

async function bootstrap() {
  // const httpsOptions = {
  //   key: fs.readFileSync('../secrets/privage.key'),
  //   cert: fs.readFileSync('../secrets/selfsigned.crt'),
  // };
  const app = await NestFactory.create(AppModule, {
    // httpsOptions,

  });
  app.enableCors({
    origin: true,//여기에 url을 넣어도된다. 
    credentials: true,
  });
  await app.listen(3000);
}
bootstrap();

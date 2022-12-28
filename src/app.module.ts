import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AirplaneModule } from './airplane/airplane.module';
import { SubmitModule } from './submit/submit.module';
import { StorageModule } from './storage/storage.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:clfwjsvkfrl@userlist.5xs1dxx.mongodb.net/?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    ),
    SubmitModule,
    StorageModule,
    AirplaneModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

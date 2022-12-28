import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AirplaneModule } from './airplane/airplane.module';
import { SubmitModule } from './submit/submit.module';
import { StorageModule } from './storage/storage.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'ls-5975a976b05b33e746632068781c73571e544215.c2nlk3cuz0nx.ap-northeast-2.rds.amazonaws.com',
      port: 3306,
      username: 'dbmasteruser',
      password: 'qcL,?.Rp,Hra{bEPUJR9VZ_`0GXt{M*6',
      database: 'nest',
      entities: [],
      synchronize: true,
    }),
    SubmitModule,
    StorageModule,
    AirplaneModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

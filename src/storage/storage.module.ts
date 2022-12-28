import { Module } from '@nestjs/common';
import { StorageService } from './storage.service';
import { StorageController } from './storage.controller';
// import { AirplaneService } from '../airplane/airplane.service';

@Module({
  controllers: [StorageController],
  providers: [StorageService],
})
export class StorageModule {}

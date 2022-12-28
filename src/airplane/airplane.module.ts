import { Module } from '@nestjs/common';
import { AirplaneService } from './airplane.service';
import { AirplaneController } from './airplane.controller';
import { StorageService } from '../storage/storage.service';

@Module({
  controllers: [AirplaneController],
  providers: [AirplaneService, StorageService],
})
export class AirplaneModule {}

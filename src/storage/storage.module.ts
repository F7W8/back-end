import { Module } from '@nestjs/common';
import { StorageService } from './storage.service';
import { StorageController } from './storage.controller';
import { Plane, PlaneSchema } from '../schemas/plane.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Plane.name, schema: PlaneSchema }]),
  ],
  controllers: [StorageController],
  providers: [StorageService],
})
export class StorageModule {}

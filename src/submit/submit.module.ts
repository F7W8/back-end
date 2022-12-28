import { Module } from '@nestjs/common';
import { SubmitService } from './submit.service';
import { SubmitController } from './submit.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Plane, PlaneSchema } from '../schemas/plane.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Plane.name, schema: PlaneSchema }]),
  ],
  controllers: [SubmitController],
  providers: [SubmitService],
})
export class SubmitModule {}

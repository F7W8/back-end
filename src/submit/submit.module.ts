import { Module } from '@nestjs/common';
import { SubmitService } from './submit.service';
import { SubmitController } from './submit.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Submit, SubmitSchema } from '../schemas/submit.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Submit.name, schema: SubmitSchema }]),
  ],
  controllers: [SubmitController],
  providers: [SubmitService],
})
export class SubmitModule {}

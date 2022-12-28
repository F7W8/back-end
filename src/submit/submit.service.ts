import { createParamDecorator, Injectable } from '@nestjs/common';
import { RequestSubmitDto } from './dto/requestSubmitDto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Submit, SubmitDocument } from './schemas/submit.schema';

@Injectable()
export class SubmitService {
  constructor(@InjectModel(Submit.name) private submitModel: Model<SubmitDocument>) {}
  async create(requestSubmitDto: RequestSubmitDto): Promise<Submit> {
    try {
      console.log(requestSubmitDto.content); //여기까진 잘됨
      const createdSubmit = await new this.submitModel(requestSubmitDto).save();
      console.log(createdSubmit)
      return createdSubmit;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}

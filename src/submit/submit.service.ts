import { createParamDecorator, Injectable } from '@nestjs/common';
import { RequestSubmitDto } from './dto/requestSubmitDto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Submit, SubmitDocument } from '../schemas/submit.schema';

@Injectable()
export class SubmitService {
  constructor(
    @InjectModel(Submit.name) private submitModel: Model<SubmitDocument>,
  ) {}
  async create(requestSubmitDto: RequestSubmitDto): Promise<Submit> {
    try {
      const createdSubmit = await new this.submitModel(requestSubmitDto).save();
      return createdSubmit;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}

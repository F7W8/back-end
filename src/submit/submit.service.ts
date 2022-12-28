import { createParamDecorator, Injectable } from '@nestjs/common';
import { RequestSubmitDto } from './dto/requestSubmitDto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Plane, PlaneDocument } from '../schemas/plane.schema';

@Injectable()
export class SubmitService {
  constructor(@InjectModel(Plane.name) private submitModel: Model<PlaneDocument>) {}
  async create(requestSubmitDto: RequestSubmitDto): Promise<Plane> {
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

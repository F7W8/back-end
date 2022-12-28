import { createParamDecorator, Injectable } from '@nestjs/common';
import { RequestSubmitDto } from './dto/requestSubmitDto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Plane, PlaneDocument } from '../schemas/plane.schema';

@Injectable()
export class SubmitService {
  constructor(
    @InjectModel(Plane.name) private submitModel: Model<PlaneDocument>,
  ) {}
  async create(requestSubmitDto: RequestSubmitDto): Promise<Plane> {
    try {
      const createdSubmit = await new this.submitModel(requestSubmitDto).save();
      return createdSubmit;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}

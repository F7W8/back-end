import { createParamDecorator, Injectable } from '@nestjs/common';
import { RequestSubmitDto } from './dto/requestSubmitDto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Plane, PlaneDocument } from '../schemas/plane.schema';

@Injectable()
export class SubmitService {
  constructor(
    @InjectModel(Plane.name) private planeModel: Model<PlaneDocument>,
  ) {}
  async create(requestSubmitDto: RequestSubmitDto): Promise<Plane> {
    try {
      let parsedDate = this.getDate(requestSubmitDto.year, requestSubmitDto.month, requestSubmitDto.day);
      let parsedData = {content : requestSubmitDto.content, expireAt : parsedDate}
      const createdSubmit = await new this.planeModel(parsedData).save();
      return createdSubmit;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  getDate(year: string, month: string, day: string) {
    const dateString = year + '-' + month + '-' + day;
    const date = new Date(dateString);
    return date;
  }
}

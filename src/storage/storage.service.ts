import { Body, Injectable, Query } from '@nestjs/common';
import { responseStorageDto } from './dto/responseStorage.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Plane, PlaneDocument } from '../schemas/plane.schema';
// import { AirplaneService } from '../airplane/airplane.service';

const TIME_ZONE = 3240 * 10000;
const oneDay = 1000 * 60 * 60 * 24;

@Injectable()
export class StorageService {
  constructor(
    @InjectModel(Plane.name) private readonly planeModel: Model<PlaneDocument>,
  ) {}

  async find(@Body() body): Promise<Array<Object>> {
    try {
      if (body.id){
        let planeList = await this.planeModel.findOne({ _id: body.id }).exec();
        console.log(planeList)
        let dday = this.getDDay(planeList.expireAt)
        return [{"_id": planeList.id, content: planeList.content, dday: dday}];
      } else {
        let planesList = await this.planeModel.find().exec()
        console.log(planesList);
        return planesList;
      }
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
  getDDay(date: Date){
    let parsedNow = new Date(+new Date() + TIME_ZONE).toISOString().split('T')[0];
    let parsedNowDate = new Date(parsedNow)
    let dday = (date.getTime() - parsedNowDate.getTime()) / oneDay
    console.log(dday)
    return dday
  }
}

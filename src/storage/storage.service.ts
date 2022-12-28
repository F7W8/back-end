import { Body, Injectable, Query } from '@nestjs/common';
import { requestStorageDto } from './dto/requestStorage.dto';
import { responseStorageDto } from './dto/responseStorage.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Plane, PlaneDocument } from '../schemas/plane.schema';
import { log } from 'console';
// import { AirplaneService } from '../airplane/airplane.service';

@Injectable()
export class StorageService {
  constructor(
    @InjectModel(Plane.name) private readonly planeModel: Model<PlaneDocument>,
  ) {}

  async find(@Body() body): Promise<Plane[]> {
    try {
      if (body.id){
        let planeList = await this.planeModel.findOne({ _id: body.id }).exec();
        console.log(planeList)
        return [planeList];
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
}

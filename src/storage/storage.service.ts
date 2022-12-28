import { Injectable } from '@nestjs/common';
import { requestStorageDto } from './dto/requestStorage.dto';
import { responseStorageDto } from './dto/responseStorage.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Plane, PlaneDocument } from '../schemas/plane.schema';
// import { AirplaneService } from '../airplane/airplane.service';

@Injectable()
export class StorageService {
  constructor(
    @InjectModel(Plane.name) private readonly planeModel: Model<PlaneDocument>,
  ) {}

  async findAll(): Promise<Plane[]> {
    try {
      var planeList = await this.planeModel.find().exec()
      console.log(planeList);
      return planeList;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}

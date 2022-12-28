import { Injectable } from '@nestjs/common';
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
      // id에 해당하는 테이블을 db에서 받아오고
      // return this.objectModel.find().exec();
      // 그거를 date 형식으로 바꿔줌
      this.getDate('2022', '12', '28');
      // 만약 그게 현재 날짜보다 작다면 -> 잠금해제 및 메시지 보여줌
      // 아니면 toast "비행기가 아직 도착하지 않았습니다."
      const planeList = await this.planeModel.find().exec();
      console.log(planeList);
      return planeList;
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

import { Injectable } from '@nestjs/common';
// import { StorageService } from 'src/storage/storage.service';
// import { CreateAirplaneDto } from './dto/responseAirplane.dto';
// import { UpdateAirplaneDto } from './dto/requestAirplane.dto';

@Injectable()
export class AirplaneService {
  public nickname: string;
  getNickname(nickname: string) {
    try {
      // 가져온 닉네임을 키값으로 게시글(비행기) get
    } catch (error) {
      console.log(error);
    }
  }
}

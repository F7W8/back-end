import { Injectable } from '@nestjs/common';
import { requestStorageDto } from './dto/requestStorage.dto';
import { responseStorageDto } from './dto/responseStorage.dto';
// import { AirplaneService } from '../airplane/airplane.service';

@Injectable()
export class StorageService {
  public nickname: string;

  setNickname(nickname: string) {
    this.nickname = nickname;
  }

  findOne() {
    try {
      console.log('닉네임은', this.nickname);
    } catch (error) {
      console.log(error);
    }
  }
}
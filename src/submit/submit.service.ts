import { Injectable } from '@nestjs/common';
import { RequestSubmitDto } from './dto/requestSubmitDto';

@Injectable()
export class SubmitService {
  create(requestSubmitDto: RequestSubmitDto) {
    try {
      console.log(requestSubmitDto.content); //여기까진 잘됨

      // requestSubmitDto.content를 디비에 저장해야함, 이때 key는 닉네임
    } catch (error) {
      console.log(error);
    }
  }
}

import { Injectable } from '@nestjs/common';
import { RequestSubmitDto } from './dto/requestSubmitDto';
import { Submit, SubmitSchema } from './schemas/submit.schema';

@Injectable()
export class SubmitService {
  create(requestSubmitDto: RequestSubmitDto) {
    try {
      console.log(requestSubmitDto.content); //여기까진 잘됨
      console.log(Submit.name);
      // requestSubmitDto.con tent를 디비에 저장해야함, 이때 key는 닉네임
    } catch (error) {
      console.log(error);
    }
  }
}

import { Body, Controller, Post, Query } from '@nestjs/common';
import { AirplaneService } from './airplane.service';
import { requestAirplainDto } from './dto/requestAirplane.dto';

@Controller('airplane')
export class AirplaneController {
  constructor(private readonly airplaneService: AirplaneService) {}

  @Post()
  getNickname(@Body() requestAirplainDto: string) {
    return this.airplaneService.getNickname(requestAirplainDto);
  }
}

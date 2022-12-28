import { Body, Controller } from '@nestjs/common';
import { AirplaneService } from './airplane.service';

@Controller('airplane')
export class AirplaneController {
  constructor(private readonly airplaneService: AirplaneService) {}
}

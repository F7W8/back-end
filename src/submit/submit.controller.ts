import { Controller, Post, Body } from '@nestjs/common';
import { SubmitService } from './submit.service';
import { RequestSubmitDto } from './dto/requestSubmitDto';

@Controller('airplane/submit')
export class SubmitController {
  constructor(private readonly submitService: SubmitService) {}

  @Post()
  create(@Body() requestSubmitDto: RequestSubmitDto) {
    return this.submitService.create(requestSubmitDto);
  }
}

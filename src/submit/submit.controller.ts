import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { SubmitService } from './submit.service';
import { RequestSubmitDto } from './dto/requestSubmitDto';
import { Plane } from '../schemas/plane.schema';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('airplane/submit')
export class SubmitController {
  constructor(private readonly submitService: SubmitService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() requestSubmitDto: RequestSubmitDto) {
    return this.submitService.create(requestSubmitDto);
  }
}

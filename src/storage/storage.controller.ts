import { Controller, Get, UseGuards, Body } from '@nestjs/common';
import { StorageService } from './storage.service';
import { Plane } from '../schemas/plane.schema';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('airplane/storage')
export class StorageController {
  constructor(private readonly storageService: StorageService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  // eslint-disable-next-line @typescript-eslint/ban-types
  async find(@Body() body): Promise<Array<Object>> {
    return this.storageService.find(body);
  }
}

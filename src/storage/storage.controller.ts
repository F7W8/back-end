import { Controller, Get, Param, Query, Body } from '@nestjs/common';

import { StorageService } from './storage.service';
import { Plane } from '../schemas/plane.schema';

@Controller('airplane/storage')
export class StorageController {
  constructor(private readonly storageService: StorageService) {}

  @Get()
  async find(@Body() body): Promise<Plane[]> {
    return this.storageService.find(body);
  }
}

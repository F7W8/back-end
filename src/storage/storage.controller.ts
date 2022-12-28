import { Controller, Get, Param } from '@nestjs/common';
import { StorageService } from './storage.service';
import { Plane } from '../schemas/plane.schema';

@Controller('storage')
export class StorageController {
  constructor(private readonly storageService: StorageService) {}

  @Get()
  async findAll(): Promise<Plane[]> {
    return this.storageService.findAll();
  }
}

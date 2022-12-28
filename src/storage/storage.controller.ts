import { Controller, Get, Param } from '@nestjs/common';
import { StorageService } from './storage.service';
import { responseStorageDto } from './dto/responseStorage.dto';

@Controller('airplane/storage')
export class StorageController {
  constructor(private readonly storageService: StorageService) {}

  @Get()
  findOne() {
    return this.storageService.findOne();
  }
}

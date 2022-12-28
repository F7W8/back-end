import { Controller, Get, UseGuards, Post } from '@nestjs/common';
import { StorageService } from './storage.service';
import { Plane } from '../schemas/plane.schema';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('airplane/storage')
export class StorageController {
  constructor(private readonly storageService: StorageService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(): Promise<Plane[]> {
    return this.storageService.findAll();
  }
}

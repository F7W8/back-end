import { Module } from '@nestjs/common';
import { AirplaneService } from './airplane.service';
import { AirplaneController } from './airplane.controller';
// import { AuthService } from 'src/auth/auth.service';
// import { JwtService } from '@nestjs/jwt';
// import { UsersService } from 'src/users/users.service';
// import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [AirplaneController],
  providers: [AirplaneService],
})
export class AirplaneModule {}

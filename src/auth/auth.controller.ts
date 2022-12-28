import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { LocalAuthGuard } from './local-authguard';
import { RequestLoginDto } from './dto/requestLoginDto';

@Controller('airplane')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post()
  async login(@Body() requestLoginDto: RequestLoginDto) {
    return this.authService.login(requestLoginDto); //유저 객체 받아서 액세스 토큰 리턴
  }
}

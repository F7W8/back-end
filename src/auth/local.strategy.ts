import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string): Promise<any> {
    // 유저 존재하면 user받기
    console.log('first');
    const user = await this.authService.validateUser(username);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}

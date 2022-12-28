import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { RequestLoginDto } from './dto/requestLoginDto';
import { jwtConstants } from './constants';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  //얘는 나중에 로컬.strategy.ts의 validate 메소드에서 참조됨. 유저 존재, 패스워드 일치하는지 검사하는 역할
  async validateUser(username: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    console.log('auth서비스: ', user);
    if (user) {
      const { ...result } = user;
      return result;
    }
    return null;
  }

  async login(requestLoginDto: RequestLoginDto): Promise<any> {
    const payload = {
      email: requestLoginDto.email,
      sub: requestLoginDto.id,
    };

    const access_token = this.jwtService.sign(payload, {
      secret: jwtConstants.secret,
    });
    return {
      token: access_token,
    };
  }
}

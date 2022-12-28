import { Injectable } from '@nestjs/common';
export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'minju',
    },
    {
      userId: 2,
      username: 'maria',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    console.log('user service: ', username);
    return this.users.find((user) => user.username === username);
  }
}

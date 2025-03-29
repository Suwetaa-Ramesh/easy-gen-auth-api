import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signUp(email: string, name: string, password: string) {
    const user = await this.usersService.createUser(email, name, password);
    return this.generateJwt(user);
  }

  async signIn(email: string, password: string) {
    const user = await this.usersService.findUserByEmail(email);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new Error('Invalid credentials');
    }
    return this.generateJwt(user);
  }

  private generateJwt(user) {
    const payload = { email: user.email, sub: user.id };
    return this.jwtService.sign(payload);
  }
}

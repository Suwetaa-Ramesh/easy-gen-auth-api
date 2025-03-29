import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { EmailNotFoundException } from './exceptions/email-not-found.exception';
import { InvalidCredentialsException } from './exceptions/invalid-credentials.exception';

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
    if (!user) {
      throw new EmailNotFoundException(); 
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new InvalidCredentialsException(); 
    }
    return this.generateJwt(user);
  }

  private generateJwt(user) {
    const payload = { email: user.email, sub: user.id };
    return this.jwtService.sign(payload);
  }
}

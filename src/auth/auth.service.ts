import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { EmailNotFoundException } from './exceptions/email-not-found.exception';
import { InvalidCredentialsException } from './exceptions/invalid-credentials.exception';
import { EmailExistsException } from './exceptions/email-exists-exception';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signUp(email: string, name: string, password: string) {
    try{
      const user = await this.usersService.createUser(email, name, password);
      return this.generateJwt(user);
    }catch(error:any) {
      if (error.code === 11000) { 
        throw new EmailExistsException();
      }
      throw new InternalServerErrorException('Something went wrong. Please try again.');
    }
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

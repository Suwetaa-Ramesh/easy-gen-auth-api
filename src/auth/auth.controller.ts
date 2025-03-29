import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  async signUp(@Body() body) {
    return this.authService.signUp(body.email, body.name, body.password);
  }

  @Post('signin')
  async signIn(@Body() body) {
    return this.authService.signIn(body.email, body.password);
  }

  @UseGuards(JwtAuthGuard)
  @Post('protected')
  async getUserDetails(@Body() user) {
    return { message: 'Protected route', user };
  }
}

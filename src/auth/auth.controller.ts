import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  @ApiOperation({ summary: 'Sign up a new user' })
  @ApiBody({
    description: 'The user signup data',
    type: Object,
    schema: {
      type: 'object',
      properties: {
        email: { type: 'string', example: 'user@example.com' },
        name: { type: 'string', example: 'John Doe' },
        password: { type: 'string', example: 'password123' },
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'User successfully signed up.',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request, possibly due to validation error.',
  })
  async signUp(@Body() body) {
    return this.authService.signUp(body.email, body.name, body.password);
  }

  @Post('signin')
  @ApiOperation({ summary: 'Sign in an existing user' })
  @ApiBody({
    description: 'The user signin credentials',
    type: Object,
    schema: {
      type: 'object',
      properties: {
        email: { type: 'string', example: 'user@example.com' },
        password: { type: 'string', example: 'password123' },
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'User successfully signed in.',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized, incorrect email or password.',
  })
  async signIn(@Body() body) {
    return this.authService.signIn(body.email, body.password);
  }

  @UseGuards(JwtAuthGuard)
  @Post('logout')
  @ApiOperation({ summary: 'Logout the current user' })
  @ApiResponse({
    status: 200,
    description: 'User successfully logged out.',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized, no valid session.',
  })
  async logout(@Body() body) {  
    return { message: 'Logged out successfully' };
  }
}

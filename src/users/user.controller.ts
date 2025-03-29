import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('users')
@Controller('users')
export class UserController {
  @UseGuards(JwtAuthGuard)
  @Get('')
  @ApiOperation({ summary: 'Get user details from a protected route' })
  @ApiResponse({
    status: 200,
    description: 'User details retrieved successfully.',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized, JWT token is missing or invalid.',
  })
  async getUserDetails(@Request() req) {
    const user = req.user;
    return {
        message: 'Success',
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
      };
  }
}

import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    signUp(email: string, name: string, password: string): Promise<string>;
    signIn(email: string, password: string): Promise<string>;
    private generateJwt;
}

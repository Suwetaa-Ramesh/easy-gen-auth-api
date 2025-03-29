import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signUp(body: any): Promise<string>;
    signIn(body: any): Promise<string>;
    getUserDetails(user: any): Promise<{
        message: string;
        user: any;
    }>;
    logout(body: any): Promise<{
        message: string;
    }>;
}

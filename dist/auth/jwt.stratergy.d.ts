import { UsersService } from '../users/users.service';
import { JwtPayload } from './jwt-payload.interface';
declare const JwtStrategy_base: new (...args: any) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private usersService;
    constructor(usersService: UsersService);
    validate(payload: JwtPayload): Promise<{
        id: string;
        name: string;
        email: string;
    } | null>;
}
export {};

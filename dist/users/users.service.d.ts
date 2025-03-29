import { Model } from 'mongoose';
import { User } from './user.schema';
export declare class UsersService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    createUser(email: string, name: string, password: string): Promise<User>;
    findUserByEmail(email: string): Promise<User | null>;
}

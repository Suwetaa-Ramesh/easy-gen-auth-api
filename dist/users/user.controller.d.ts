export declare class UserController {
    getUserDetails(req: any): Promise<{
        message: string;
        user: {
            id: any;
            name: any;
            email: any;
        };
    }>;
}

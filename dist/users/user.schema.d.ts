import { Schema, Document } from 'mongoose';
export declare const UserSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    email: string;
    name: string;
    password: string;
}, Document<unknown, {}, import("mongoose").FlatRecord<{
    email: string;
    name: string;
    password: string;
}>> & import("mongoose").FlatRecord<{
    email: string;
    name: string;
    password: string;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export interface User extends Document {
    id: string;
    email: string;
    password: string;
    name: string;
}

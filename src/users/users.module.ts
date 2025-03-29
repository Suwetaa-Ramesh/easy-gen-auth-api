import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'; // MongooseModule to work with MongoDB
import { UsersService } from './users.service';
import { UserSchema } from './user.schema'; // Import User schema

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]), // Register User schema
  ],
  providers: [UsersService], // Provide UsersService
  exports: [UsersService], // Export UsersService so it can be used in other modules
})
export class UsersModule {}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://suwetaaramesh:V05m8YoyebiVnQUt@cluster0.txwfmnb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
    ),
    AuthModule,
    UsersModule,
  ]
})
export class AppModule {}

// email : firstUser@gmail.com
// password: "1stuser!"

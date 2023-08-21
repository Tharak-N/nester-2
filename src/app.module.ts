import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthenticationModule } from './authentication/authentication.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    AuthenticationModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

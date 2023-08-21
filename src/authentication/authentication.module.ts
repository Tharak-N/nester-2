import { Module } from "@nestjs/common";
import { AuthService } from "./services/auth.service";
import { AuthController } from "./controller/auth/auth.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { Auth, AuthSchema } from "./Schemas/auth.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Auth.name, schema: AuthSchema }]),
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthenticationModule {}

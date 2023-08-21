import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Auth } from "../Schemas/auth.schema";
import { Model } from "mongoose";

@Injectable()
export class AuthService {
  constructor(@InjectModel(Auth.name) private authModel: Model<Auth>) {}

  async create(createUser: Auth) {
    const createdUser = new this.authModel(createUser);
    return createdUser.save();
  }

  async findAll() {
    return this.authModel.find({}).exec();
  }
  async findOne(loginCredentials: any) {
    const existingUser = await this.authModel.find({ ...loginCredentials });
    console.log("existing user is", existingUser);
    return existingUser;
  }
}

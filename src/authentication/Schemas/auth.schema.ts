import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Auth {
  @Prop()
  name: string;

  @Prop({ required: true, unique: true })
  emailId: string;

  @Prop({ required: true })
  password: string;
}

export const AuthSchema = SchemaFactory.createForClass(Auth);

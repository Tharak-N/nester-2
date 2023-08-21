import { Body, Controller, Post, Req, Res } from "@nestjs/common";
import { AuthService } from "../../services/auth.service";
import { UserRegisteration } from "../../DTO/user-registeration";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post("login")
  async login(@Body() body: any, @Res() response: any) {
    const user = await this.authService.findOne(body).catch(( error: any ) => {
      response.status(400).send("error");
    });
    if (!!user) {
      response.status(200).send("User logged in sucessfully");
    }
  }

  @Post("register")
  async register(
    @Req() request: any,
    @Res() response: any,
    @Body() body: UserRegisteration,
  ) {
    console.log("body is", body);
    const user = await this.authService
      .create(request?.body)
      .catch((error: any) => {
        response.status(400).send(error.message);
      });
    if (!!user) {
      response.status(201).send("User has been created successfully");
    }
  }
}

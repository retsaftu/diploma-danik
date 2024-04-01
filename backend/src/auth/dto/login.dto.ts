import { IsString } from 'class-validator';

export class LoginDto {
  @IsString()
  username: string;

  @IsString()
  password: string;
}
class Data {
  access_token: string;

  userId: string;
  username: string;
}
export class LoginOk {
  code: number;

  details: string;

  data: Data;
}

export class CurrentUser {
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
}

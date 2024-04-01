import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStratagy extends PassportStrategy(Strategy, 'jwt') {
  constructor() {
    super({
      ignoreExpiration: false,
      secretOrKey: 'secret-key',
      // jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: Request) => {
          const data = request?.cookies['auth-cookie'];
          if (!data) {
            return null;
          }
          return data.token;
        },
      ]),
    });
  }
  // async validate({ userId }) {
  //   return { userId };
  // }
  async validate(payload: any) {
    console.log(`payload`, payload);
    if (payload === null) {
      throw new UnauthorizedException();
    }
    // console.log(payload.exp * 1000, `payload.exp * 1000`);
    // console.log(new Date().getTime(), `new Date().getTime()`);
    // if (payload.exp) {
    //   return;
    // }
    return payload;
  }
}

import {
  ForbiddenException,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Db, Document, ObjectId } from 'mongodb';
import * as randomToken from 'rand-token';
import { compare } from 'bcryptjs';
import {
  EMAIL_NOT_CONFIRM,
  USERNAME_ALREADY_EXISTS,
  USER_NOT_FOUND_ERROR,
  WRONG_PASSWORD_ERROR,
} from 'src/auth/auth.constants';

import { genSalt, hash } from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    @Inject('MONGODB_CONNECTION') private db: Db,
  ) {
    console.log('SERVICE AUTH');
  }

  async login(user: any) {
    const payload = { userId: user._id, username: user.username };
    return {
      token: await this.jwtService.signAsync(payload),
      username: user.username,
      profile: user.profile,
    };
  }
  public async getJwtToken(user: any): Promise<string> {
    const payload: any = { userId: user._id, username: user.username };

    return this.jwtService.signAsync(payload, {
      expiresIn: 604800000,
    });
  }
  public async getRefreshToken(userId: string): Promise<string> {
    const userDataToUpdate = {
      refreshToken: randomToken.generate(16),
      refreshTokenExp: new Date(new Date().getTime() + 604800000),
    };
    await this.db.collection('users').updateOne(
      { _id: new ObjectId(userId) },
      {
        $set: {
          refreshToken: userDataToUpdate.refreshToken,
          refreshTokenExp: userDataToUpdate.refreshTokenExp,
        },
      },
    );
    return userDataToUpdate.refreshToken;
  }
  public async validRefreshToken(
    userId: string,
    refreshToken: string,
  ): Promise<Document> {
    const [user] = await this.db
      .collection('users')
      .aggregate([
        {
          $match: {
            _id: new ObjectId(userId),
            refreshToken: refreshToken,
            refreshTokenExp: {
              $gt: new Date(new Date().getTime() - 604800000),
            },
            isDeleted: false,
          },
        },
        {
          $project: {
            _id: 1,
            userId: '$_id',
          },
        },
        {
          $limit: 1,
        },
      ])
      .toArray();

    return user;
  }

  async validateUser(username: string, password: string) {
    const user = await this.findUserByUserName(username);
    console.log('start');

    if (!user) {
      throw new UnauthorizedException(USER_NOT_FOUND_ERROR);
    }
    if (user.isActive === false) {
      throw new UnauthorizedException(EMAIL_NOT_CONFIRM);
    }
    const isCorrectPassword = await compare(password, user.password);
    if (!isCorrectPassword) {
      throw new UnauthorizedException(WRONG_PASSWORD_ERROR);
    }
    console.log(`user`, user);
    return user;
  }

  async findUserByUserName(username: string) {
    const [user] = await this.db
      .collection('users')
      .aggregate([
        {
          $match: {
            username: username,
          },
        },
      ])
      .toArray();
    return user;
  }

  async checkUsernameForUniqueness(username: string) {
    const user = await this.findUserByUserName(username);

    if (user) {
      throw new ForbiddenException(USERNAME_ALREADY_EXISTS);
    }
  }
  async createUser(name: string, username: string, password: string) {
    const salt = await genSalt(10);

    const user = {
      name: name,
      username: username,
      password: await hash(password, salt),
    };

    await this.db.collection('users').insertOne(user);
  }
}

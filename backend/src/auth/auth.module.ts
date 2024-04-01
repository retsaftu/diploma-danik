import { Module } from '@nestjs/common';
import { JwtModule, JwtModuleOptions } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { DatabaseModule } from 'src/database/database.module';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { CheckerStratagy } from './strategies/checker.strategy';
import { JwtStratagy } from './strategies/jwt.strategy';
import { RefreshStrategy } from './strategies/refresh.strategy';

@Module({
  imports: [
    DatabaseModule,
    JwtModule.registerAsync({
      useFactory: async (): Promise<JwtModuleOptions> => {
        return {
          secret: 'secret-key',
          // signOptions: { expiresIn: '1s' },
        };
      },
    }),
    PassportModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStratagy, RefreshStrategy, CheckerStratagy],
})
export class AuthModule {}

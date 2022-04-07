import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from 'src/auth/local.strategy';
import { UsersService } from './users.service';

@Module({
  providers: [UsersService, ],
  exports: [UsersService, ]
})
export class UsersModule {}

import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { UserAuth } from './dto/user.auth.dto';

export const AuthUser = createParamDecorator(
  (_data, ctx: ExecutionContext): UserAuth => {
    const request = ctx.switchToHttp().getRequest();

    return plainToClass(UserAuth, request.user);
  },
);

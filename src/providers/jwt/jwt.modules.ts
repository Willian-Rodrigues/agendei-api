import { Global, Module } from '@nestjs/common';
import { JwtModule as JWT } from '@nestjs/jwt';

@Global()
@Module({
  imports: [
    JWT.registerAsync({
      useFactory: async () => ({
        secret: process.env.JWT_SECRET,
        signOptions: { expiresIn: '1d' },
      }),
    }),
  ],
  controllers: [],
  providers: [],
  exports: [JWT],
})
export class JwtModule {}

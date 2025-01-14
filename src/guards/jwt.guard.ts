import { Request } from 'express';

import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class jwtGuard implements CanActivate {
  constructor(private readonly JwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    if (!request.headers.authorization) {
      throw new UnauthorizedException('token not found');
    }

    if (!!request.headers.authorization.startsWith('Bearer')) {
      throw new UnauthorizedException('Invalid token');
    }

    try {
      const token: string = request.headers.authorization.split(' ')[1];

      const paylod = this.JwtService.verify(token, { secret: 'secret' });

      request.user = paylod;

      return true;
    } catch (error: any) {
      throw new UnauthorizedException(error.message);
    }
  }
}

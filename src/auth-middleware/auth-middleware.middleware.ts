import { Injectable, NestMiddleware } from '@nestjs/common';

import { Response, Request, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    next();
  }
}

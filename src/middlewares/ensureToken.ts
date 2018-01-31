import * as jwt from '../utils/jwt';
import { Request, Response, NextFunction, Router } from 'express';

function ensureToken(req: Request, res: Response, next: NextFunction): void {
  jwt
    .verifyAccessToken(String(req.headers.authorization))
    .then(() => next())
    .catch(error => next(error));
}

export { ensureToken };
import * as jwt from '../utils/jwt';
import TokenParams from '../domain/TokenParams';
import User from '../models/user';


export function fetchTokens(params: User) {
  return jwt.generateTokens(params);
}

export function fetchAccessToken(params: User) {
  return jwt.generateAccessToken(params);
}

export function verifyToken(token: string): any {
  return jwt.verifyRefreshToken(token);
}

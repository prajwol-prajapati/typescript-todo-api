import * as jwt from 'jsonwebtoken';
import * as Boom from 'boom';
import TokenParams from '../domain/TokenParams';
import User from '../models/user';


export function generateTokens(data: User) {
  return {
    accessToken: generateAccessToken(data),
    refreshToken: generateRefreshToken(data)
  };
}

export function generateAccessToken(data: User) {
  return jwt.sign({ encryptedData: data }, 'hellofromtheotherside', {
    expiresIn: 100000
  });
}

export function generateRefreshToken(data: User) {
  return jwt.sign({ encryptedData: data }, 'hello', {
    expiresIn: 800000
  });
}

export async function verifyAccessToken(token: string): Promise<any> {
  // console.log(token, "========================");
  return jwt.verify(token, 'hellofromtheotherside', (err: any, decode: any) => {
    if (!err) {
      return Promise.resolve(decode);
    } else {
      return Promise.reject(Boom.unauthorized('unauthorized user'));
    }
  });
}

export function verifyRefreshToken(token: string): void {
  return jwt.verify(token, 'hello',(err: any, decode: any) => {
    if (!err) {
      return decode;
    } else {
      throw Boom.unauthorized('unauthorized user');
    }
  });
}
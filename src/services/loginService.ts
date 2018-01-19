import * as Boom from 'boom';
import lang from '../utils/lang';
import LoginBody from '../domain/LoginBody';
import * as tokenService from './tokenService';
import { createSession } from './sessionService';
import User from '../models/user';


export async function login(loginParams: LoginBody): Promise<{}> {
    try {
        let userDetails: any = await verifyUser(loginParams);
        console.log(userDetails);
        let { id, name, email, password } = userDetails.toJSON();

        let tokens = tokenService.fetchTokens(userDetails);

        let userInfo = {
            user:{
                id,
                name,
                email,
                password
            },
            tokens
            
        };
        await createSession(userInfo);

        return userInfo;
    } catch (err) {
        throw err;
    }


    
}

export function verifyUser(loginParams) {
    return new User({ email: loginParams.email, password: loginParams.password })
    .fetch()
    .then(user => {
        if (!user) {
            throw Boom.notFound(lang.userNotFound);
        }
        return user;
    })
}
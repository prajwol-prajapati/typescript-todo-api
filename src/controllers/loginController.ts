import { request } from 'http';
import * as HTTPStatus from 'http-status-codes';
import * as loginService from '../services/loginService';
import { Request, Response, NextFunction, Router } from 'express';

const router = Router();

router.post('/', (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body);
    loginService
    .login(req.body)
    .then((result = {}) => res.status(HTTPStatus.CREATED).json(result))
    .catch((error: {}) => next(error));
})

export default router;
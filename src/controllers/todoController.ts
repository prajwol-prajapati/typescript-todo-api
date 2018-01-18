import { request } from 'http';
import * as HTTPStatus from 'http-status-codes';
import * as todoService from '../services/todoService';
import { Request, Response, NextFunction, Router } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response, next: NextFunction): void => {
  todoService
    .fetchAllTodo()
    .then((result: {}) => res.status(HTTPStatus.OK).json(result))
    .catch((error: {}) => next(error));
});

router.post('/', (req: Request, res: Response, next: NextFunction): void => {
  todoService
    .createTodo(req.body)
    .then((result: {}) => res.status(HTTPStatus.CREATED).json(result))
    .catch((error: {}) => next(error));
});

export default router;
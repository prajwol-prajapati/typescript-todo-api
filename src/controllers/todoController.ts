import { request } from 'http';
import * as HTTPStatus from 'http-status-codes';
import * as todoService from '../services/todoService';
import { Request, Response, NextFunction, Router } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response, next: NextFunction): void => {
  todoService
    .fetchAllTodo()
    .then((result: any) => {
      let tempData = result.data.pagination;

      res.status(HTTPStatus.CREATED).json({metadata: tempData, result});
    })
    .catch((error: {}) => next(error));
});

router.post('/', (req: Request, res: Response, next: NextFunction): void => {
  todoService
    .createTodo(req.body, 1)
    .then((result: {}) => res.status(HTTPStatus.CREATED).json(result))
    .catch((error: {}) => next(error));
});

router.get('/:id', (req: Request, res: Response, next: NextFunction): void => {
  todoService
    .getTodoById(req.params.id)
    .then((result: {}) => res.status(HTTPStatus.OK).json(result))
    .catch((error: {}) => next(error));
});

router.put('/:id', (req: Request, res: Response, next: NextFunction): void => {
  todoService
    .editTodo(req.params.id, req.body)
    .then((result: {}) => res.status(HTTPStatus.OK).json(result))
    .catch((error: {}) => next(error));
} )

router.delete('/:id', (req: Request, res: Response, next: NextFunction): void => {
  todoService
    .removeTodo(req.params.id)
    .then((result: {}) => res.status(HTTPStatus.OK).json(result))
    .catch((error: {}) => next(error));
})

export default router;
import { request } from 'http';
import * as HTTPStatus from 'http-status-codes';
import * as userService from '../services/userService';
import { Request, Response, NextFunction, Router } from 'express';

/**
 * Get list of user
 *
 * @param  {Request} req
 * @param  {Response} res
 * @param  {NextFunction} next
 * @returns void
 */

const router = Router();

router.get('/', (req: Request, res: Response, next: NextFunction): void => {
  userService
    .fetchAll()
    .then((result: {}) => res.status(HTTPStatus.OK).json(result))
    .catch((error: {}) => next(error));
})
// export function index(req: Request, res: Response, next: NextFunction): void {
//   userService
//     .fetchAll()
//     .then((result: {}) => res.status(HTTPStatus.OK).json(result))
//     .catch((error: {}) => next(error));
// }

/**
 * Get specific user
 *
 * @param  {Request} req
 * @param  {Response} res
 * @param  {NextFunction} next
 * @returns void
 */
// export function show(req: Request, res: Response, next: NextFunction): void {
//   userService
//     .findById(req.params.id)
//     .then((result = {}) => res.status(HTTPStatus.OK).json(result))
//     .catch((error: {}) => next(error));
// }
router.get('/:id', (req:Request, res: Response, next: NextFunction): void => {
  userService
    .findById(req.params.id)
    .then((result = {}) => res.status(HTTPStatus.OK).json(result))
    .catch((error: {}) => next(error));
})

router.post('/',  (req:Request, res: Response, next: NextFunction): void => {
  userService
    .createUser(req.body)
    .then((result = {}) => res.status(HTTPStatus.CREATED).json(result))
    .catch((error: {}) => next(error));
})

/**
 * Update specific user information
 *
 * @param  {Request} req
 * @param  {Response} res
 * @param  {NextFunction} next
 * @returns void
 */
// export function update(req: Request, res: Response, next: NextFunction): void {
//   req.body.id = req.params.id;
//   userService
//     .update(req.body)
//     .then((result: {}) => res.status(HTTPStatus.OK).json(result))
//     .catch((error: {}) => next(error));
// }

router.put('/:id', (req: Request, res: Response, next: NextFunction): void => {
  req.body.id = req.params.id;
  userService
    .update(req.body)
    .then((result: {}) => res.status(HTTPStatus.OK).json(result))
    .catch((error: {}) => next(error));
})

/**
 * Delete specific user information
 *
 * @param  {Request} req
 * @param  {Response} res
 * @param  {NextFunction} next
 * @returns void
 */
export function remove(req: Request, res: Response, next: NextFunction): void {
  userService
    .removeUserById(req.params.id)
    .then((result: {}) => res.status(HTTPStatus.OK).json(result))
    .catch((error: {}) => next(error));
}

router.delete('/:id', (req: Request, res: Response, next: NextFunction): void => {
  userService
    .removeUserById(req.params.id)
    .then((result: {}) => res.status(HTTPStatus.OK).json(result))
    .catch((error: {}) => next(error));
})

export default router;
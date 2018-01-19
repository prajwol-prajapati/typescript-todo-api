import { request } from 'http';
import * as HTTPStatus from 'http-status-codes';
import * as logout from '../services/sessionService';
import { Request, Response, NextFunction, Router } from 'express';

const router = Router();

router.post('/:id', (req, res: Response, next: NextFunction) => {
    console.log(req.params.id);
    logout
      .deleteSession(req.params.id)
      .then(data => res.json({ data }))
      .catch(err => next(err));
  });

export default router;
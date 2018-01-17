import { Router } from 'express';
import * as homeController from './controllers/homeController';
import userController from './controllers/userController';
import * as authController from './controllers/authController';
import { uniqueEmail, userExists } from './validators/userValidator';

const router = Router();
router.get('/', homeController.index);

router.post('/register', uniqueEmail, authController.register);

// router.get('/users', userController.index);
// router.get('/users/:id', userController.show);
// router.put('/users/:id', userExists, userController.update);
// router.delete('/users/:id', userExists, userController.remove);
router.use('/users', userController);


export default router;

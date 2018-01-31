import { Router } from 'express';
import * as homeController from './controllers/homeController';
import userController from './controllers/userController';
import * as authController from './controllers/authController';
import { uniqueEmail, userExists } from './validators/userValidator';
import todoController from './controllers/todoController';
import loginController from './controllers/loginController';
import logoutController from './controllers/logoutController';
import { ensureToken } from './middlewares/ensureToken';
import tokenController from './controllers/tokenController';

const router = Router();
router.get('/', homeController.index);

router.post('/register', uniqueEmail, authController.register);
router.use('/login', loginController);
router.use('/logout', ensureToken, logoutController);

router.use('/refresh', tokenController);
router.use('/users', ensureToken, userController);
router.use('/todos', ensureToken, todoController);



export default router;

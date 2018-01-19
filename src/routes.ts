import { Router } from 'express';
import * as homeController from './controllers/homeController';
import userController from './controllers/userController';
import * as authController from './controllers/authController';
import { uniqueEmail, userExists } from './validators/userValidator';
import todoController from './controllers/todoController';
import loginController from './controllers/loginController';
import { ensureToken } from './middlewares/ensureToken';

const router = Router();
router.get('/', homeController.index);

router.post('/register', uniqueEmail, authController.register);
router.use('/login', loginController);

// router.get('/users', userController.index);
// router.get('/users/:id', userController.show);
// router.put('/users/:id', userExists, userController.update);
// router.delete('/users/:id', userExists, userController.remove);
router.use('/users', ensureToken, userController);
router.use('/todos', ensureToken, todoController);



export default router;

import { Router } from 'express';
import userControllers from '../controllers/user-controller.js';

const authRouter = Router();

authRouter
  .post('/sign-up', userControllers.signUp);

export default authRouter;
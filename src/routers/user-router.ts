import { Router } from 'express';
import userControllers from '../controllers/user-controller.js';

const userRouter = Router();

userRouter
  .post('/sign-up', userControllers.signUp);

export default userRouter;
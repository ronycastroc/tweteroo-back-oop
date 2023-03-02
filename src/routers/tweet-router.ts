import { Router } from 'express';
import tweetController from '../controllers/tweet-controller';

const tweetRouter = Router();

tweetRouter
  .post('/tweets', tweetController.create)
  .get('/tweets', tweetController.getAll)
  .get('/tweets/:username', tweetController.getByUser);

export default tweetRouter;
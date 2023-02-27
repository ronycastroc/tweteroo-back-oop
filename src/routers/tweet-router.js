import { Router } from 'express';
import { getTweets, getTweetsUser, postTweet } from '../controllers/tweet-controller.js';

const tweetRouter = Router();

tweetRouter
  .post('/tweets', postTweet)
  .get('/tweets/:username', getTweetsUser)
  .get('/tweets', getTweets);

export { tweetRouter };
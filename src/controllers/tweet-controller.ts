import { Request, Response } from 'express';
import { Tweet } from '../models/Tweet.js';
import userControllers from './user-controller.js';

class TweetController {
  tweets: Tweet[]

  constructor() {
    this.tweets = [];
    this.create = this.create.bind(this);
    this.getAll = this.getAll.bind(this);
    this.getByUser = this.getByUser.bind(this);
  }

  create(req: Request, res: Response): Response {
    const { tweet, username } = req.body;

    if (!username || !tweet) {
      return res.status(400).send('All fields are mandatory!');
    }

    const { avatar } = userControllers.getLoggedUser(username);

    this.tweets.push({ username, tweet, avatar });

    return res.sendStatus(201);
  }

  getAll(req: Request, res: Response): Response {
    const page = +req.query.page!;

    if (page && page < 1) {
      return res.status(400).send('Please enter a valid page!');      
    }
    const limit = 10;
    const start = (page - 1) * limit;
    const end = page * limit;

    if (this.tweets.length <= 10) {
      return res.send(this.reverseTweets());
    }

    return res.status(200).send([...this.tweets].reverse().slice(start, end));
  }

  getByUser(req: Request, res: Response): Response {
    const { username } = req.params;

    const tweetsUser = this.tweets.filter(value => value.username === username);

   return res.status(200).send(tweetsUser);
  }

  reverseTweets(): Tweet[] {
    return [...this.tweets].reverse();
  }
}

export default new TweetController();
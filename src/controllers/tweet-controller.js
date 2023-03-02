import userControllers from './user-controller.js';

class TweetController {
  constructor() {
    this.tweets = [];
    this.create = this.create.bind(this);
    this.getAll = this.getAll.bind(this);
    this.getByUser = this.getByUser.bind(this);
  }

  create(req, res) {
    const { tweet, username } = req.body;

    if (!username || !tweet) {
      return res.status(400).send('All fields are mandatory!');
    }

    const { avatar } = userControllers.getLoggedUser(username)[0];

    this.tweets.push({ username, tweet, avatar });

    res.status(201).send('OK!');
  }

  getAll(req, res) {
    const { page } = req.query;

    if (page && page < 1) {
      res.status(400).send('Please enter a valid page!');
      return;
    }
    const limit = 10;
    const start = (page - 1) * limit;
    const end = page * limit;

    if (this.tweets.length <= 10) {
      return res.send(this.reverseTweets());
    }

    res.status(200).send([...this.tweets].reverse().slice(start, end));
  }

  getByUser(req, res) {
    const { username } = req.params;

    const tweetsUser = this.tweets.filter(value => value.username === username);

    res.status(200).send(tweetsUser);
  }

  reverseTweets() {
    return [...this.tweets].reverse();
  }
}

export default new TweetController();
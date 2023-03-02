import chalk from 'chalk';
import cors from 'cors';
import express, { json } from 'express';
import userRouter from './routers/user-router.js'
import tweetRouter from './routers/tweet-router.js';

const app = express();

app
  .use(cors())
  .use(json())
  .use(userRouter)
  .use(tweetRouter);

const port = 5001

app.listen(port, () => {
  console.log(chalk.bold.blue(`Server is listening on port ${port}`));
});

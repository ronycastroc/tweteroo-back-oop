import chalk from 'chalk';
import cors from 'cors';
import express, { json } from 'express';
import { tweetRouter } from './routers/tweet-router.js';
import { userRouter } from './routers/user-router.js';

const app = express();

app
  .use(cors())
  .use(json())
  .use(userRouter)
  .use(tweetRouter);

app.listen(5001, () => {
  console.log(chalk.bold.blue('Servidor funfando de boas!!!'));
});

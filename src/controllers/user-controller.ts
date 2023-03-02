import { Request, Response } from 'express';
import { User } from '../models/User'

class UserController {
  users: User[];

  constructor() {
    this.users = [];
    this.signUp = this.signUp.bind(this);
    this.getLoggedUser = this.getLoggedUser.bind(this);
  }

  signUp(req: Request, res: Response): Response {
    const { username, avatar } = req.body;

    if (!username || !avatar) {
      return res.status(400).send('All fields are mandatory!');
    }

    this.users.push({ username, avatar });

    return res.status(200).send('OK!');
  }

  getLoggedUser(username: string): User {
    const user = this.users.find(value => value.username === username);

    // if (!user) throw new Error("Not exist");

    return user! // (user! nunca será undefined ou null, má prática) 
  }
}

export default new UserController()
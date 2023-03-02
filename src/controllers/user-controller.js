class UserController {
  constructor() {
    this.users = []
    this.signUp = this.signUp.bind(this)
    this.getLoggedUser = this.getLoggedUser.bind(this)
  }

  signUp(req, res) {
    const { username, avatar } = req.body;

    if (!username || !avatar) {
     return res.status(400).send('All fields are mandatory!');     
    }

    this.users.push({ username, avatar });

    res.status(200).send('OK!');
  }

  getLoggedUser(username) {
    return this.users.filter(value => value.username === username);
  }
}

export default new UserController()
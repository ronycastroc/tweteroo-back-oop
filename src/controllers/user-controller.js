import { User } from "../models/user-model.js";

export const usuarios = [];

export function signUp (req, res) {
  try {
    const { username, avatar } = req.body;

    if (!username || !avatar) {
      res.status(400).send('Todos os campos são obrigatórios!');
      return;
    }

    const user = new User({
      username,
      avatar
    });
  
    usuarios.push(user);
  
    res.status(200).send('OK deu tudo certo');
  } catch (error) {
    res.status(500).send('Algo deu errado, tente novamente.');
  }
}
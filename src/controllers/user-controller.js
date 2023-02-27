export const usuarios = [];

export function signUp (req, res) {
  try {
    const { username, avatar } = req.body;

    if (!username || !avatar) {
      res.status(400).send('Todos os campos são obrigatórios!');
      return;
    }
  
    usuarios.push({ username, avatar });
  
    res.status(200).send('OK deu tudo certo');
  } catch (error) {
    res.status(500).send('Algo deu errado, tente novamente.');
  }
}
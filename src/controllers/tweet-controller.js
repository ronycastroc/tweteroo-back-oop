import { usuarios } from "./user-controller.js";

const tweets = [];

export function postTweet (req, res) {
  try {
    const { tweet, username } = req.body;

    if (!username || !tweet) {
      return res.status(400).send('Todos os campos são obrigatórios!');
    }

    const { avatar } = usuarios.find(user => user.username === username);

    tweets.push({ username, tweet, avatar });

    res.status(201).send('OK, seu tweet foi criado');
  } catch (error) {
    res.status(500).send('Algo deu errado, tente novamente.');
  }
}

export function getTweetsUser (req, res) {
  try {
    const { username } = req.params;

    const tweetsDoUsuario = tweets.filter(t => t.username === username);

    res.status(200).send(tweetsDoUsuario);
  } catch (error) {
    res.status(500).send('Algo deu errado, tente novamente.');
  }
}

export function getTweets (req, res) {
  try {
    const { page } = req.query;

    if (page && page < 1) {
      res.status(400).send('Informe uma página válida!');
      return;
    }
    const limite = 10;
    const start = (page - 1) * limite;
    const end = page * limite;

    if (tweets.length <= 10) {
      return res.send(reverseTweets());
    }

    res.status(200).send([...tweets].reverse().slice(start, end));
  } catch (error) {
    res.status(500).send('Algo deu errado, tente novamente.');
  }
}

function reverseTweets() {
  return [...tweets].reverse();
}
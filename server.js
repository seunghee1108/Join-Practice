import express from 'express';
import fs from 'fs';

const app = express();
const PORT = 3002;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  fs.readFile('./public/index.html', 'utf-8', (err, data) => {
    if (err) {
      res.status(500).send('서버에 문제가 있습니다.');
      return;
    }
    res.status(200).send(data);
  });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // 여기에 로그인 처리 로직을 추가하세요.
  // 예를 들어, username과 password를 확인하여 응답을 구성할 수 있습니다.

  res.status(200).send('Login successful!');
});

app.use((req, res) => {
  res.status(404).send('Not Found');
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/`);
});

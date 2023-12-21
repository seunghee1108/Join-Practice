// CJS 방식
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  function serverErrorLog() {
    res.writeHead(500);
    return res.end('서버에 문제가 있습니다.');
  }

  console.log("어떤 요청이 들어오는지 확인", "URL ->", req.url, "method ->", req.method);

  if (req.url === '/' && req.method === 'GET') {
    fs.readFile('./public/index.html', 'utf-8', (err, data) => {
      if (err) {
        serverErrorLog();
      }
      res.writeHead(200, { 'Content-type': 'text/html' });
      res.end(data);
    });
  } else if (req.url === '/login' && req.method === 'POST') {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk;
    });

    req.on('end', () => {
      // 여기에서 body에는 POST 데이터가 들어 있습니다.
      console.log('Received POST data:', body);

      // 여기에 로그인 처리 로직을 추가하세요.
      // 예를 들어, body를 파싱하여 로그인 정보를 확인하고 응답을 구성할 수 있습니다.

      res.writeHead(200, { 'Content-type': 'text/plain' });
      res.end('Login successful!');
    });
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/`);
});
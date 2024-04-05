'use strict';
const http = require('node:http');
const server = http.createServer((req, res) => {
  const now = Date.now();
  res.setHeader('Content-Type', 'text/plain;charset=utf-8');
  res.setHeader('Set-Cookie', `last_access=${now};`);
  const last_access_time = req.headers.cookie ? parseInt(req.headers.cookie.split('last_access=')[1]) : now;
  res.end(new Date(last_access_time).toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' }));
});
const port = 8000;
server.listen(port, () => {
  console.info(`Listening on ${port}`);
});

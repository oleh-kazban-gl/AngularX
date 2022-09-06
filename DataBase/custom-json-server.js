const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);

server.get('/401', (req, res) => {
  console.log('/401, error 401');

  res.status(401).json({
    error: "401 Error message"
  })
});
server.get('/403', (req, res) => {
  console.log('/403, error 403');

  res.status(403).json({
    error: "403 Error message"
  })
});
server.get('/503', (req, res) => {
  console.log('/503, error 503');

  res.status(503).json({
    error: "503 Error message"
  })
});

server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now();
  }

  next();
});

server.use(router);

server.listen(port, () => {
  console.log('JSON Server is running on http://localhost:' + port);
})

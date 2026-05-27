export default function appSrc(express, bodyParser, createReadStream, crypto, http) {
  const app = express();
  const login = 'panindv';

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.text({ type: '*/*' }));

  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Content-Type, x-author, ngrok-skip-browser-warning');

    if (req.method === 'OPTIONS') {
      res.end();
      return;
    }

    next();
  });

  app.all('/login', (req, res) => {
    res.type('text/plain').send(login);
  });

  app.all('/login/', (req, res) => {
    res.type('text/plain').send(login);
  });

  app.get('/id/:n', async (req, res) => {
    try {
      const response = await fetch(`https://nd.kodaktor.ru/users/${req.params.n}`);
      const data = await response.json();

      res.type('text/plain').send(String(data.login ?? ''));
    } catch {
      res.status(500).type('text/plain').send('');
    }
  });

  app.get('/id/:n/', async (req, res) => {
    try {
      const response = await fetch(`https://nd.kodaktor.ru/users/${req.params.n}`);
      const data = await response.json();

      res.type('text/plain').send(String(data.login ?? ''));
    } catch {
      res.status(500).type('text/plain').send('');
    }
  });

  app.all(/.*/, (req, res) => {
    res.type('text/plain').send(login);
  });

  return app;
}

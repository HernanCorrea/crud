import express from 'express';
import routes from './routes/routes.js';
import sanitize from 'sanitize';

const app = express();
const port = 3006;

app.use(sanitize.middleware);
app.use(routes)

app.listen(port, () => {
  console.log(`Estamos conectados al servidor http://localhost:${port}`)
});
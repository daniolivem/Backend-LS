import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';

const app = express();

// Middlewares básicos
app.use(cors());
app.use(express.json());

// Rotas
app.use(routes);

// Rota raiz mínima
app.get('/', (req, res) => {
  res.json({ ok: true, message: 'LS API up' });
});

export default app;

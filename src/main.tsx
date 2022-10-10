import { createServer, Model } from 'miragejs';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

createServer({
  models: {
    transactions: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de website',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2021-04-12 09:08:00'),
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 1100,
          createdAt: new Date('2021-05-14 09:08:00'),
        },
      ],
    });
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transactions');
    });

    this.post('/transactions', (schema, request) => {
      const id = Math.floor(Math.random() * 100);
      const data = JSON.parse(request.requestBody);

      const response = schema.create('transactions', {
        id,
        ...data,
        createdAt: new Date(),
      }).attrs;

      return response;
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// Importing all the required stuff
const path = require('path');
const cors = require('cors');
const express = require('express');
const { apiProxy } = require('./config/proxy');
const { PORT, connection } = require('./config/db');

// Creating a new server
const app = express();
__dirname = path.resolve();

// In-built middlewares
app.use(express.static(path.join(__dirname, '/view/dist')));
// app.use(cors({ origin: client_baseURL }));
app.use(cors());
app.use(express.json());

// Consuming the proxy middleware
app.use('/api/movies', apiProxy);

// Routes
app.get('/api', (req, res) => {
  res
    .status(200)
    .send(
      '<div style="text-align: center;"><h1>Welcome to the MovieGuru Database !!!</h1></div>'
    );
});

// Setting up the configurations for the client side
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'view', 'dist', 'index.html'));
});

// Listening to the server
app.listen(PORT, connection);

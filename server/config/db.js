require('dotenv').config();

// Importing required environment variables
const { PORT, client_baseURL } = process.env;

// Creating a secure connection to the server
const connection = () => {
  console.log(`App is running on port ${PORT}`);
};

// Exporting all required stuff
module.exports = { PORT, connection, client_baseURL };

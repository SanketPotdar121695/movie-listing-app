require('dotenv').config();
const mongoose = require('mongoose');

const { PORT, secretKey1, secretKey2 } = process.env;

const connection = async () => {
  try {
    await mongoose.connect(process.env.mongoURL);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.log('Something went wrong!', err.message);
  }
  console.log(`App is running on port ${PORT}`);
};

module.exports = {
  PORT,
  connection,
  secretKey1,
  secretKey2
};

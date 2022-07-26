const { MongoClient } = require('mongodb');

require('dotenv').config();

const MONGO_DB_URL = `mongodb://${process.env.HOST || 'mongodb'}:27017/StoreManager`;
const DB_NAME = 'StoreManager';

let connection = null;

module.exports = async () => {
  try {
    if (connection) {
      return connection;
    }
    connection = (await MongoClient.connect(
      MONGO_DB_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    )).db(DB_NAME);
    return connection;
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
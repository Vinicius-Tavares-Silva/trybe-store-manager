const connection = require('../connection');
const collection = require('./collection');

module.exports = async (payload) => (await connection())
  .collection(collection)
  .insertOne(payload);
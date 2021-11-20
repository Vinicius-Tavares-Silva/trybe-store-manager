const model = require('../../model/products');
const collection = require('../../model/products/collection');

module.exports = async (req, res, next) => {
  const response = {};
  try {
    const objectList = await model.find();
    response[collection] = objectList;
    return res.status(200).send(response);
  } catch (err) {
    next(err);
  }
};
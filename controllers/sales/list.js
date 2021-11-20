const model = require('../../model/sales');
const collection = require('../../model/sales/collection');

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
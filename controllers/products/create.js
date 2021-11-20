const model = require('../../model/products');

module.exports = async (req, res, next) => {
  const payload = req.body;
  try {
    const object = await model.create(payload);
    return res.status(201).send(object.ops[0]);
  } catch (err) {
    next(err);
  }
};
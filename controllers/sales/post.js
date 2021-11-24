const model = require('../../model/sales');

module.exports = async (req, res, next) => {
  const payload = req.body;
  const payloadObject = {
    itensSold: payload,
  };
  try {
    const object = await model.create(payloadObject);
    return res.status(200).send(object.ops[0]);
  } catch (err) {
    next(err);
  }
};
const model = require('../../model/sales');
const validations = require('../../service/sales/validations');

const runValidations = (payload) => {
  if (!validations.quantityValueValidation(payload)) {
    return 'Wrong product ID or invalid quantity';
  }
  if (!validations.quantityTypeValidation(payload)) {
    return 'Wrong product ID or invalid quantity';
  }
  return null;
};

module.exports = async (req, res, next) => {
  const payload = req.body;
  const payloadObject = { itensSold: payload };
  const validationReturn = runValidations(payload);
  try {
    if (validationReturn) {
      return res.status(422).send({ err: {
        code: 'invalid_data',
        message: validationReturn,
      },
      });
    }
    const object = await model.create(payloadObject);
    return res.status(200).send(object.ops[0]);
  } catch (err) {
    next(err);
  }
};
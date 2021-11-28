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
  try {
    const { id } = req.params;
    const payload = req.body;
    const validationReturn = runValidations(payload);
    if (validationReturn) {
      return res.status(422).send({ err: {
        code: 'invalid_data',
        message: validationReturn,
      },
      });
    }
    const updatedObject = await model.update({ _id: id, itensSold: payload });
    return res.status(200).send(updatedObject);
  } catch (err) {
    next(err);
  }
};
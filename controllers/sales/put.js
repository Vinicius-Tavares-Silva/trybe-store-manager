const model = require('../../model/sales');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const object = await model.findById(id);
    if (!object) {
      return res.status(422).send({ err: {
        code: 'invalid_data',
        message: 'Wrong id format',
      },
      });
    }
    const updatedObject = await model.update({ ...object, ...req.body });
    return res.status(200).send(updatedObject);
  } catch (err) {
    next(err);
  }
};
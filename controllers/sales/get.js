const model = require('../../model/sales');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const object = await model.findById(id);
    if (!object) {
      return res.status(404).send({ err: {
        code: 'not_found',
        message: 'Sale not found',
      },
      });
    }

    return res.status(200).send(object);
  } catch (err) {
    next(err);
  }
};
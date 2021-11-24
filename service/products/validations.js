const nameLengthValidation = (name) => {
  if (name.length < 5) {
    return false;
  }
  return true;
};

const nameValidation = (name, array) => array.find((object) => object.name === name);

const quantityValueValidation = (quantity) => {
  if (quantity <= 0) {
    return false;
  }
  return true;
};

const quantityTypeValidation = (quantity) => {
  if (typeof (quantity) === 'string') {
    return false;
  }
  return true;
};

module.exports = {
  nameLengthValidation,
  nameValidation,
  quantityValueValidation,
  quantityTypeValidation,
};
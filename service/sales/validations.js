const quantityValueValidation = (array) => {
  let isValid = true;
  array.forEach((element) => {
    if (element.quantity <= 0) {
      isValid = false;
    }
  });
  return isValid;
};

const quantityTypeValidation = (array) => {
  let isValid = true;
  array.forEach((element) => {
    if (typeof (element.quantity) === 'string') {
      isValid = false;
    }
  });
  return isValid;
};

module.exports = {
  quantityValueValidation,
  quantityTypeValidation,
};
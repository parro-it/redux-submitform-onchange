'use strict';

module.exports = function getElementValue(elm) {
  switch (elm.type) {
    case 'checkbox':
    case 'radio':
      return elm.checked;
    case 'number':
      return elm.valueAsNumber;
    case 'date':
      return elm.valueAsDate;
    default:
      return elm.value;
  }
};

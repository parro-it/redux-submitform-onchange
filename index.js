'use strict';

const throttle = require('throttle-override');
const value = require('./modules/get-element-value');

function submitOnChange(componentProps, _options) {
  const options = _options || {};
  options.throttling = options.throttling || 100;
  options.onSubmitted = options.onSubmitted || (() => {});

  const submit = throttle(values => {
    componentProps.handleSubmit(values);
    options.onSubmitted(values);
  }, options.throttling);

  return field => event => {
    field.onChange(event); // takes event or value
    const currentValues = Object.assign({}, componentProps.values);
    currentValues[field.name] = value(event.target);
    submit(currentValues);
  };
}

module.exports = submitOnChange;

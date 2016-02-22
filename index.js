'use strict';

const throttle = require('throttle-override');

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
    currentValues[field.name] = event.target.value;
    submit(currentValues);

  };
}

module.exports = submitOnChange;

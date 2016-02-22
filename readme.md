# redux-submitform-onvalidation

> Automatically submit a [redux-form](https://github.com/erikras/redux-form) every time
> it validate succesfully, but no more than once in a while.


[![Travis Build Status](https://img.shields.io/travis/parro-it/redux-submitform-onvalidation.svg)](http://travis-ci.org/parro-it/redux-submitform-onvalidation)
[![NPM module](https://img.shields.io/npm/v/redux-submitform-onvalidation.svg)](https://npmjs.org/package/redux-submitform-onvalidation)
[![NPM downloads](https://img.shields.io/npm/dt/redux-submitform-onvalidation.svg)](https://npmjs.org/package/redux-submitform-onvalidation)

## Installation

```bash
npm install --save redux-submitform-onvalidation
```

## Usage

Please refer to the [redux-form](http://erikras.github.io/redux-form/#/examples/synchronous-validation?_k=95xd6r).

```javascript
  const submitOn = require('redux-submitform-onvalidation');

  const validate = values => {
    const errors = {};
    if (!values.username) {
      errors.username = 'Required';
    } else if (values.username.length > 15) {
      errors.username = 'Must be 15 characters or less';
    }
    return errors;
  };

  ...

  // this is how you normally validate a redux-form
  export default reduxForm({
    form: 'synchronousValidation',
    fields,
    validate
  })(SynchronousValidationForm);


  // instead, to enable submit on validation:

  const validateAndSubmit = submitOn(validate);

  const form = reduxForm({
    form: 'tunnel',
    fields,
    validate: validateAndSubmit.validate
  }, mapStateToProps )(EditTunnel);

  validateAndSubmit.formToSubmit(form);

```

## License


The MIT License (MIT)

Copyright (c) 2015 parro-it

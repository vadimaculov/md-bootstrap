module.exports = {
  "env": {
      "browser": true,
      "es6": true,
      "jquery": true,
      "jest": true
    },
    "extends": "airbnb-base",
    "globals": {
      "Atomics": "readonly",
      "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
      "ecmaVersion": 2018,
      "sourceType": "module"
    },
    "rules": {
      "no-var": 0,
      "vars-on-top": 0,
      "prefer-rest-params": 0,
      "prefer-spread": 0,
      "no-plusplus": 0
    }
};
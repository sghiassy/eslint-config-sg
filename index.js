module.exports = {
  extends: "airbnb",
  parserOptions:{
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true
    }
  },
  rules: {
    "eqeqeq": 0,
    "max-len": 0,
    "space-before-function-paren": ["error", "never"]
  }
};

'use strict';

var randomNatural = require('random-natural');

module.exports = function (min, max) {

  var length = arguments.length;
  var now    = new Date();

  if (length === 0) {
    max = now.getFullYear();
    min = max - 100;
  } else if (length === 1) {
    max = min;
    min = max - 100;
  }

  return randomNatural(min, max);
};

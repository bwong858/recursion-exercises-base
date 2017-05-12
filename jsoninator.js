const _ = require('underscore'); // the real one! :)

// This is what you would do if you liked things to be easy:
// const stringify = JSON.stringify;
// But you don't. So you're going to write it from scratch...

const stringify = function(obj) {
  switch (typeof obj) {
    case 'string':
      return '"' + obj + '"';
    case 'object':
      if (obj === null) return 'null';
      return (Array.isArray(obj))
        ? '[' + obj.map(el => stringify(el)) + ']'
        : '{' + Object.keys(obj).map(key => stringify(key) + ':' + stringify(obj[key])) + '}';
    default:
      return String(obj);
  }
};

module.exports = {
  stringify: stringify
};

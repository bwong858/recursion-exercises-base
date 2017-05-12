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
      if (Array.isArray(obj)) {
        return '[' + obj.map(el => stringify(el)) + ']';
      }
      return '{' + Object.keys(obj).map(key => stringify(key) + ':' + stringify(obj[key])) + '}';
    default:
      return String(obj);
  }
};
// const stringify = function(obj) {
//   let res = '';
//   if (typeof obj === 'string') {
//     res += '"' + obj + '"';
//   } else if (typeof obj !== 'object' || obj === null) {
//     res += String(obj);
//   } else if (Array.isArray(obj)) {
//     res += '[';
//     if (obj.length) {
//       for (el of obj) {
//         res += stringify(el) + ',';
//       }
//       res = res.substring(0, res.length - 1);
//     }
//     res += ']';
//   } else if (typeof obj === 'object') {
//     res += '{';
//     if (Object.keys(obj).length) {
//       for (key in obj) {
//         res += stringify(key) + ':' + stringify(obj[key]);
//       }
//     }
//     res += '}';
//   }
//   return res;
// };

module.exports = {
  stringify: stringify
};

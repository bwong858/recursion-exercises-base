const { flattenTreeToArray } = require('./dom-util');
const _ = require('underscore');

const getElementById = function(root, id) {
  return flattenTreeToArray(root).filter(el => el.id === id)[0];
};
// const getElementById = function(root, id) {
//   const elements = flattenTreeToArray(root);
//   for (el of elements) {
//     if (el.id === id) {
//       return el;
//     }
//   }
// };

// const getElementsByClassName = function(root, className) {
//   const elements = flattenTreeToArray(root);
//   const res = [];
//   for (el of elements.filter(el => el.className)) {
//     const extractedCNs = el.className.split(/[ ]+/);
//     for (cn of extractedCNs) {
//       if (cn === className) {
//         res.push(el);
//       }
//     }
//   }
//   return res;
// };

const getElementsByClassName = function(root, className) {
  return flattenTreeToArray(root).filter(el =>
    el.className && el.className.split(/[ ]+/).indexOf(className) !== -1);
};

const getElementsByTagName = function(root, tagName) {
  return flattenTreeToArray(root).filter(el => el.tagName === tagName);
};

module.exports = {
  getElementById: getElementById,
  getElementsByClassName: getElementsByClassName,
  getElementsByTagName: getElementsByTagName
};

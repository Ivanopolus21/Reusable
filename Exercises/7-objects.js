'use strict';

const fn = () => {
  const obj1 = { name: 'Vania' };
  let obj2 = { name: 'Kaytlin' };
  obj1.name = 'sense';
  obj2.name = 'nonsense';
  obj2 = { name: 'Kate' };
};
module.exports = { fn };

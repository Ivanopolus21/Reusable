'use strict';

const range = (start, end) => { //функция
  const res = end - start;
  if (res < 0) return [];
  let e = 0;
  const arr = [res];
  for (let s = start; s <= end; s++) {
    arr[e++] = s;
  }
  return arr;
};
module.exports = { range };

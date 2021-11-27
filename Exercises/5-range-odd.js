'use strict';

const rangeOdd = (start, end) => { //функция
  const res = Math.ceil((end - start) / 2);
  if (res < 0) return [];
  const arr = new Array(res);
  let e = 0;
  for (let s = start; s <= end; s++) {
    if (s % 2 !== 0) arr[e++] = s;
  }
  return arr;
};

module.exports = { rangeOdd };

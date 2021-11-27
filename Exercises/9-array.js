'use strict';

const phonebook = [
  { name: 'Vania', phone: '+380938383927' },
  { name: 'Sasha', phone: '+380836296780' },
  { name: 'Kate', phone: '+380109723654' },
];

const findPhoneByName = () => {
  for (const obj of phonebook) {
    if (obj === name) return obj.phone;
  }
};

module.exports = { phonebook, findPhoneByName };

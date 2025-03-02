/* eslint-disable prettier/prettier */
'use strict';

const sortBy = [...document.querySelectorAll('thead th')];
const list = document.querySelector('tbody');
const employee = [...document.querySelectorAll('tbody tr')];

sortBy.forEach((elem) => {
  elem.addEventListener('click', () => {
    let callback;
    let index;

    if (elem.textContent === 'Name' || elem.textContent === 'Position') {
      callback = (a, b) => a.localeCompare(b);
      index = elem.textContent === 'Name' ? 0 : 1;
    } else if (elem.textContent === 'Age') {
      callback = (a, b) => parseInt(a) - parseInt(b);
      index = 2;
    } else if (elem.textContent === 'Salary') {
      callback = (a, b) =>
        parseInt(a.replace(/[$,]/g, '')) - parseInt(b.replace(/[$,]/g, ''));
      index = 3;
    }

    employee.sort((a, b) =>
      callback(
        a.cells[index].textContent.trim(),
        b.cells[index].textContent.trim(),
      // eslint-disable-next-line comma-dangle, prettier/prettier
      ),);

    list.innerHTML = '';
    employee.forEach((item) => list.appendChild(item));
  });
});

'use strict';

const tableForSort = document.querySelector('table');
const theadTr = document.querySelector('thead tr');
const tbody = document.querySelector('tbody');
const tbodyTrs = [...document.querySelectorAll('tbody tr')];

tableForSort.addEventListener('click', (e) => {
  const target = e.target;

  if (!target.matches('thead th')) {
    return;
  }

  const indexColumn = [...theadTr.children].indexOf(target);

  tbodyTrs.sort((trA, trB) => {
    let valueA = [...trA.children][indexColumn].innerText;
    let valueB = [...trB.children][indexColumn].innerText;

    if (target.innerText === 'Salary') {
      valueA = valueA.slice(1).split(',').join('');
      valueB = valueB.slice(1).split(',').join('');

      return +valueA - +valueB;
    }

    if (target.innerText === 'Age') {
      return +valueA - +valueB;
    }

    return valueA.localeCompare(valueB);
  });

  tbodyTrs.map(tr => tbody.append(tr));
});

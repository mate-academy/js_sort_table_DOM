'use strict';

const headers = document.querySelector('thead > tr').children;
const footers = document.querySelector('tfoot > tr').children;
const tableBody = document.querySelector('tbody');
const rows = [...tableBody.children];

for (let i = 0; i < headers.length; i++) {
  headers[i].addEventListener('click', e => {
    rows.sort((a, b) =>
      sortRows(
        a.children[i].innerText,
        b.children[i].innerText,
        headers[i].innerText
      ));

    tableBody.innerHTML = '';

    rows.forEach(elem =>
      tableBody.insertAdjacentHTML('beforeend', elem.innerHTML));
  });

  footers[i].addEventListener('click', e => {
    rows.sort((a, b) =>
      sortRows(
        a.children[i].innerText,
        b.children[i].innerText,
        footers[i].innerText
      ));

    tableBody.innerHTML = '';

    rows.forEach(elem =>
      tableBody.insertAdjacentHTML('beforeend', elem.innerHTML));
  });

  footers[i].addEventListener('mouseover', e => {
    e.target.style.color = 'yellow';
    e.target.style.cursor = 'pointer';
  });

  footers[i].addEventListener('mouseleave', e => {
    e.target.style.color = '#808080';
    e.target.style.cursor = 'auto';
  });
}

function sortRows(elemFirst, elemSecond, columnName) {
  switch (columnName) {
    case 'Name':
    case 'Position':
      return elemFirst.localeCompare(elemSecond);
    case 'Age':
      return +elemFirst - +elemSecond;
    case 'Salary':
      return getSalaryNumber(elemFirst) - getSalaryNumber(elemSecond);
  }
}

function getSalaryNumber(salary) {
  return +salary.substr(1).replaceAll(',', '');
}

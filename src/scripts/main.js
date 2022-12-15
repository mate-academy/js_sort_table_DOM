/* eslint-disable no-shadow */
'use strict';

const tableHeader = document.querySelector('thead');
const table = document.querySelector('tbody');

const getSalaryNumber = (salary) =>
  Number(salary.split(',').join('').slice(1));

tableHeader.addEventListener('click', (event) => {
  const clicked = event.target;
  const type = clicked.textContent;
  const index = [...clicked.closest('tr').children].indexOf(clicked);

  const tableData = [...table.children];

  tableData.sort((a, b) => {
    const firstText = a.children[index].textContent;
    const secondText = b.children[index].textContent;

    switch (type) {
      case 'Position':
      case 'Name':
        return (firstText.localeCompare(secondText));
      case 'Age':
        return firstText - secondText;
      case 'Salary':
        return getSalaryNumber(firstText) - getSalaryNumber(secondText);
    };
  });

  table.innerHTML = '';
  tableData.forEach(element => table.append(element));
});

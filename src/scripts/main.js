'use strict';

const table = document.querySelector('table');
const tableBody = document.querySelector('tbody');
const ceils = [...tableBody.querySelectorAll('tr')];

table.addEventListener('click', (e) => {
  const target = e.target;

  if (target.innerText === 'Name') {
    const sortName = ceils.sort((a, b) => {
      return a.cells[0].innerHTML
        .toLowerCase()
        .localeCompare(b.cells[0].innerHTML.toLowerCase());
    });

    table.tBodies[0].append(...sortName);
  }

  if (target.innerText === 'Position') {
    const sortPosition = ceils.sort((a, b) => {
      return a.cells[1].innerHTML
        .toLowerCase()
        .localeCompare(b.cells[1].innerHTML.toLowerCase());
    });

    table.tBodies[0].append(...sortPosition);
  }

  if (target.innerText === 'Age') {
    const sortAge = ceils.sort(
      (rowA, rowB) => rowA.cells[2].innerHTML - rowB.cells[2].innerHTML,
    );

    table.tBodies[0].append(...sortAge);
  }

  if (target.innerText === 'Salary') {
    const sortSalary = ceils.sort(
      (a, b) =>
        getNumber(a.cells[3].innerHTML) - getNumber(b.cells[3].innerHTML),
    );

    table.tBodies[0].append(...sortSalary);
  }
});

function getNumber(str) {
  const num = str.split(',').join('').split('');

  num.shift();

  return parseInt(num.join(''));
}

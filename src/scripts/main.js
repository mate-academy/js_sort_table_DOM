'use strict';

const employees = [...document.querySelectorAll('tbody > tr')];
const header = document.querySelector('thead');
const body = document.querySelector('tbody');

header.addEventListener('click', (e) => {
  const columnName = e.target.closest('th').textContent.trim().toLowerCase();

  body.innerHTML = '';

  employees
    .sort((r1, r2) => compareRows[columnName](r1, r2))
    .forEach((row) => body.appendChild(row));
});

class compareRows {
  static name(r1, r2) {
    return r1.cells[0].textContent
      .trim()
      .localeCompare(r2.cells[0].textContent.trim());
  }

  static position(r1, r2) {
    return r1.cells[1].textContent
      .trim()
      .localeCompare(r2.cells[1].textContent.trim());
  }

  static age(r1, r2) {
    return +r1.cells[2].textContent - +r2.cells[2].textContent;
  }

  static salary(r1, r2) {
    return (
      +r1.cells[3].textContent.replace('$', '').replace(',', '') -
      +r2.cells[3].textContent.replace('$', '').replace(',', '')
    );
  }
}

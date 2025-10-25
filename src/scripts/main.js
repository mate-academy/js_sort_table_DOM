'use strict';

// функция для преобразования строки зарплаты в число
function parseSalary(str) {
  return Number(str.replace(/[^\d.-]/g, ''));
}

function sort(table, target) {
  const rows = Array.from(table.rows);
  const ths = [...thead.querySelectorAll('th')];
  const indexOfColumn = ths.indexOf(target);
  let sortedRows = [];

  table.innerHTML = "";

  if (indexOfColumn === 0 || indexOfColumn === 1) {
    sortedRows = rows.sort((a, b) => {
      const str1 = a.cells[indexOfColumn].textContent.trim();
      const str2 = b.cells[indexOfColumn].textContent.trim();

      return str1.localeCompare(str2);
    });
  }
  else if (indexOfColumn === 3) {
    sortedRows = rows.sort((a, b) => {
      const num1 = parseSalary(a.cells[indexOfColumn].textContent.trim());
      const num2 = parseSalary(b.cells[indexOfColumn].textContent.trim());

      return num1 - num2;
    });
  }
  else {
    sortedRows = rows.sort((a, b) => {
      const num1 = Number(a.cells[indexOfColumn].textContent.trim())
      const num2 = Number(b.cells[indexOfColumn].textContent.trim());

      return num1 - num2;
    });
  }

  sortedRows.forEach(row => table.appendChild(row));
}

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');

thead.addEventListener('click', (e) => {
  const myTarget = e.target.closest('th');

  if (!myTarget) {
    return;
  }

  sort(tbody, myTarget);
});

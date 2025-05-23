'use strict';

const sortCategorys = document.querySelectorAll('thead th');
const employees = [];

document.querySelectorAll('tbody tr').forEach((employeeRow) => {
  const cells = employeeRow.querySelectorAll('td');
  const employee = {};

  sortCategorys.forEach((category, index) => {
    const key = category.textContent;
    const value = cells[index].innerText;

    employee[key] = value;
  });

  employees.push(employee);
});

sortCategorys.forEach((category) => {
  category.addEventListener('click', () => {
    const columnName = category.textContent;

    employees.sort((a, b) => {
      const aValue = a[columnName].trim();
      const bValue = b[columnName].trim();

      const aNum = Number(aValue.replace(/[$,]/g, ''));
      const bNum = Number(bValue.replace(/[$,]/g, ''));

      const isNumeric = !isNaN(aNum) && !isNaN(bNum);

      if (isNumeric) {
        return aNum - bNum;
      } else {
        return aValue.localeCompare(bValue);
      }
    });

    const tbody = document.querySelector('tbody');

    tbody.innerHTML = '';

    employees.forEach((employee) => {
      const row = document.createElement('tr');

      Object.values(employee).forEach((value) => {
        const cell = document.createElement('td');

        cell.textContent = value;
        row.appendChild(cell);
      });

      tbody.appendChild(row);
    });
  });
});

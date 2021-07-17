'use strict';

function getSalary(salary) {
  return Number(salary.replace(/[$,]/g, ''));
}

const headerRow = document.querySelector('thead tr');
const tbody = document.querySelector('tbody');
let tbodyRows = tbody.querySelectorAll('tr');

headerRow.addEventListener('click', () => {
  const index = [...headerRow.children].indexOf(event.target);
  const columnName = headerRow.children[index].textContent;

  switch (columnName) {
    case 'Name': {
      tbodyRows = [...tbodyRows].sort((a, b) =>
        a.children[index].textContent
          .localeCompare(b.children[index].textContent));

      break;
    }

    case 'Position': {
      tbodyRows = [...tbodyRows].sort((a, b) =>
        a.children[index].textContent
          .localeCompare(b.children[index].textContent));

      break;
    }

    case 'Age': {
      tbodyRows = [...tbodyRows].sort((a, b) =>
        a.children[index].textContent - b.children[index].textContent);

      break;
    }

    case 'Salary': {
      tbodyRows = [...tbodyRows].sort((a, b) =>
        getSalary(a.children[index].textContent)
        - getSalary(b.children[index].textContent));

      break;
    }
  }

  for (const row of tbodyRows) {
    tbody.append(row);
  }
});

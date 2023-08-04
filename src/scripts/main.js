'use strict';

const table = document.querySelector('tbody');
const captions = document.querySelector('thead');
const employees = [];

Array.from(table.children).forEach(el => {
  employees.push({
    Name: el.children[0].textContent,
    Position: el.children[1].textContent,
    Age: el.children[2].textContent,
    Salary: +el.children[3].textContent.replace(/[,$]/g, ''),
  });
});

function sortTable(a, b, columnName) {
  const first = a[columnName];
  const second = b[columnName];

  if (columnName === 'Name' || columnName === 'Position') {
    return first.localeCompare(second);
  }

  return first - second;
}

captions.addEventListener('click', (e) => {
  const sortValue = e.target.textContent;

  employees.sort((a, b) => sortTable(a, b, sortValue));
  table.innerHTML = '';

  employees.forEach(employee => {
    const row = document.createElement('tr');

    for (const [ key, data ] of Object.entries(employee)) {
      const column = document.createElement('td');

      column.textContent = data;

      if (key === 'Salary') {
        const salary = `$${data.toLocaleString()}`;

        column.textContent = salary;
      }

      row.append(column);
    };
    table.append(row);
  });
});

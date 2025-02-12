'use strict';

const tableBody = document.querySelector('tbody');
const list = [...tableBody.children];

const employees = list.map((item) => {
  const cells = item.querySelectorAll('td');
  // item is a DOM element (<tr>) and cannot be directly indexed.
  // We need to select its children (td).

  return {
    name: cells[0].textContent,
    position: cells[1].textContent,
    age: +cells[2].textContent,
    salary: +cells[3].textContent.replace(/[$,]/g, ''),
  };
});

const tableHead = document.querySelector('thead');

const currentSort = { column: '', direction: 'asc' };

tableHead.addEventListener('click', function (e) {
  const column = e.target.textContent.toLowerCase();
  let data;

  if (e.target.tagName !== 'TH') {
    return;
  }

  if (currentSort.column === column) {
    currentSort.direction = currentSort.direction === 'asc' ? 'desc' : 'asc';
  } else {
    currentSort.column = column;
    currentSort.direction = 'asc';
  }

  if (['name', 'position'].includes(column)) {
    data = sortingByString(employees, column);
  } else if (['age', 'salary'].includes(column)) {
    data = sortingByNumber(employees, column);
  }

  if (data) {
    updateTable(data);
  }
});

function sortingByString(objects, type) {
  // return objects.sort((a, b) => a[type].localeCompare(b[type]));
  return objects.sort((a, b) => {
    const result = a[type].localeCompare(b[type]);

    return currentSort.direction === 'asc' ? result : -result;
  });
}

function sortingByNumber(objects, type) {
  // return objects.sort((a, b) => a[type] - b[type]);
  return objects.sort((a, b) => {
    const result = a[type] - b[type];

    return currentSort.direction === 'asc' ? result : -result;
  });
}

function updateTable(sortedData) {
  tableBody.innerHTML = '';

  sortedData.forEach((employee) => {
    const row = document.createElement('tr');

    row.innerHTML = `<td>${employee.name}</td><td>${employee.position}</td><td>${employee.age}</td><td>$${employee.salary.toLocaleString()}</td>`;

    tableBody.appendChild(row);
  });
}

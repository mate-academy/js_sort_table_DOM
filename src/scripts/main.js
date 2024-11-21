'use strict';

const columns = document.querySelectorAll('thead tr th');
const rowsOfEmployees = Array.from(document.querySelectorAll('tbody tr'));

const data = rowsOfEmployees.map((row) => {
  const infoArray = row.querySelectorAll('td');
  const salaryString = infoArray[3].textContent
    .replace('$', '')
    .replace(',', '');
  const salaryNumber = parseFloat(salaryString);

  return {
    name: infoArray[0].textContent,
    position: infoArray[1].textContent,
    age: parseInt(infoArray[2].textContent),
    salary: salaryNumber,
  };
});

const createCell = (text) => {
  const td = document.createElement('td');

  td.textContent = text;

  return td;
};

const createSalary = (salary) => {
  const td = document.createElement('td');

  td.textContent = `$${salary.toLocaleString('en-US')}`;

  return td;
};

const createRow = (employee) => {
  const tr = document.createElement('tr');

  tr.append(createCell(employee.name));
  tr.append(createCell(employee.position));
  tr.append(createCell(employee.age));
  tr.append(createSalary(employee.salary));

  return tr;
};

columns.forEach((column) => {
  column.addEventListener('click', () => {
    const columnName = column.textContent;
    const tbody = document.querySelector('tbody');

    tbody.innerHTML = '';

    if (columnName === 'Name') {
      data.sort((a, b) => a.name.localeCompare(b.name));
    } else if (columnName === 'Position') {
      data.sort((a, b) => a.position.localeCompare(b.position));
    } else if (columnName === 'Age') {
      data.sort((a, b) => a.age - b.age);
    } else {
      data.sort((a, b) => a.salary - b.salary);
    }

    data.forEach((employee) => {
      tbody.appendChild(createRow(employee));
    });
  });
});

'use strict';

const table = document.querySelector('table');

table.addEventListener('click', (e) => {
  const bodies = document.querySelector('tbody');
  const bodyRows = [...bodies.rows];

  const data = bodyRows.map((row) => {
    const newObject = {
      name: row.cells[0].textContent,
      position: row.cells[1].textContent,
      age: row.cells[2].textContent,
      salary: row.cells[3].textContent,
    };

    return newObject;
  });

  bodies.remove();

  const newBodies = document.createElement('tbody');

  table.tHead.after(newBodies);

  const sortedData = [...data].sort((row1, row2) => {
    switch (e.target.textContent) {
      case 'Name':
        return row1.name.toLowerCase().localeCompare(row2.name.toLowerCase());
      case 'Position':
        return row1.position
          .toLowerCase()
          .localeCompare(row2.position.toLowerCase());
      case 'Age':
        return +row1.age - +row2.age;
      case 'Salary':
        return (
          +row1.salary.slice(1).split(',').join('') -
          +row2.salary.slice(1).split(',').join('')
        );
      default:
        return 0;
    }
  });

  const newRows = sortedData.map((row) => {
    const trElement = document.createElement('tr');

    for (const property in row) {
      const tdElement = document.createElement('td');

      tdElement.textContent = row[property];
      trElement.append(tdElement);
    }

    return trElement;
  });

  newRows.forEach((row) => {
    newBodies.append(row);
  });
});

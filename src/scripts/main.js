'use strict';

const table = document.querySelector('table');

table.addEventListener('click', (e) => {
  const bodies = document.querySelector('tbody');
  const bodyRows = [...bodies.rows];

  const data = bodyRows.map((el) => {
    const newObject = {
      name: el.cells[0].textContent,
      position: el.cells[1].textContent,
      age: el.cells[2].textContent,
      salary: el.cells[3].textContent,
    };

    return newObject;
  });

  bodies.remove();

  const newBodies = document.createElement('tbody');

  table.tHead.after(newBodies);

  let sortedData = [];

  switch (e.target.textContent) {
    case 'Name': {
      sortedData = [...data].sort((el1, el2) => {
        return el1.name.toLowerCase().localeCompare(el2.name.toLowerCase());
      });
      break;
    }

    case 'Position': {
      sortedData = [...data].sort((el1, el2) => {
        return el1.position
          .toLowerCase()
          .localeCompare(el2.position.toLowerCase());
      });
      break;
    }

    case 'Age': {
      sortedData = [...data].sort((el1, el2) => +el1.age - +el2.age);
      break;
    }

    case 'Salary': {
      sortedData = [...data].sort(
        (el1, el2) =>
          +el1.salary.slice(1).split(',').join('') -
          +el2.salary.slice(1).split(',').join(''),
      );
      break;
    }

    default: {
      sortedData = [...data];
    }
  }

  const newElements = sortedData.map((el) => {
    const trElement = document.createElement('tr');

    for (const property in el) {
      const thElement = document.createElement('td');

      thElement.textContent = el[property];
      trElement.append(thElement);
    }

    return trElement;
  });

  newElements.forEach((corEl) => {
    newBodies.append(corEl);
  });
});

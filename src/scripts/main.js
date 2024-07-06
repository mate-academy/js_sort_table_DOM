'use strict';

// ASC - сортіровко за зростанням

const tableElement = document.querySelector('table');

tableElement.addEventListener('click', (e) => {
  const bodyElement = document.querySelector('tbody');
  const bodyRows = [...bodyElement.rows];

  const data = bodyRows.map((trElement) => {
    const newObject = {
      name: trElement.cells[0].textContent,
      position: trElement.cells[1].textContent,
      age: trElement.cells[2].textContent,
      salary: trElement.cells[3].textContent,
    };

    return newObject;
  });

  bodyElement.remove();

  const newBodyElement = document.createElement('tbody');

  tableElement.tHead.after(newBodyElement);

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
    newBodyElement.append(corEl);
  });
});

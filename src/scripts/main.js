'use strict';

const table = document.querySelector('table');
const tableHead = [...table.rows][0];
const tableBody = table.querySelector('tbody');

for (const item of [...tableHead.childNodes]) {
  if (item.tagName === 'TH') {
    item.addEventListener('click', sort);
  }
}

function sort(e) {
  const data = getData(table);
  const index = e.currentTarget.cellIndex;

  data.sort((value1, value2) => {
    const val1 = value1[Object.keys(value1)[index]];
    const val2 = value2[Object.keys(value2)[index]];

    if (index === 0 || index === 1) {
      return val2.localeCompare(val1);
    }

    if (index === 2 || index === 3) {
      let number1 = +val1;
      let number2 = +val2;

      if (index === 3) {
        number1 = +val1.split('$')[1].split(',').join('');
        number2 = +val2.split('$')[1].split(',').join('');
      }

      return number1 - number2;
    }
  });

  for (let i = 0; i < data.length; i++) {
    const row = [...tableBody.rows][i];
    const cels = [...row.cells];

    cels[0].textContent = data[i].name;
    cels[1].textContent = data[i].position;
    cels[2].textContent = data[i].age;
    cels[3].textContent = data[i].salary;
  }
}

function getData(t) {
  const result = [];
  const end = [...t.rows].length - 1;

  for (let i = 1; i < end; i++) {
    const row = [...t.rows][i];
    const cells = [...row.cells];

    const rowData = {
      name: cells[0].textContent,
      position: cells[1].textContent,
      age: cells[2].textContent,
      salary: cells[3].textContent,
    };

    result.push(rowData);
  }

  return result;
}

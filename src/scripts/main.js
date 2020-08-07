'use strict';

// write code here

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const employees = tbody.querySelectorAll('tr');
const span = document.createElement('span');
const thOfThead = thead.querySelectorAll('th');

const sortHadler = (event) => {
  const item = event.target;
  const arrayTr = [...employees];

  switch (item.innerText) {
    case 'Name' :
      arrayTr.sort((a, b) =>
        a.cells[0].innerText.localeCompare(b.cells[0].innerText));

      for (let i = 0; i < arrayTr.length; i++) {
        tbody.append(arrayTr[i]);
      }
      break;
    case 'Position' :
      arrayTr.sort((a, b) =>
        a.cells[1].innerText.localeCompare(b.cells[1].innerText));

      for (let i = 0; i < arrayTr.length; i++) {
        tbody.append(arrayTr[i]);
      }
      break;
    case 'Age' :
      arrayTr.sort((a, b) =>
        parseFloat(a.cells[2].innerText) - parseFloat(b.cells[2].innerText));

      for (let i = 0; i < arrayTr.length; i++) {
        tbody.append(arrayTr[i]);
      }
      break;
    case 'Salary' :
      arrayTr.sort((a, b) =>
        parseNumber(a.cells[3].innerText) - parseNumber(b.cells[3].innerText));

      for (let i = 0; i < arrayTr.length; i++) {
        tbody.append(arrayTr[i]);
      }
      break;
    default:
      break;
  }
};

for (const element of [...thOfThead]) {
  element.prepend(span.cloneNode(true));

  const wantedSpan = element.querySelector('span');

  wantedSpan.append(element.childNodes[1]);

  wantedSpan.addEventListener('click', sortHadler);
}

function parseNumber(element) {
  const item = element.slice(1).split(',').join('');

  return Number.parseInt(item);
}

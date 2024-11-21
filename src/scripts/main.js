'use strict';

const head = [...document.querySelectorAll('thead > tr')];
const body = [...document.querySelectorAll('tbody > tr')];
const tbody = document.querySelector('tbody');

const sortElems = {
  Name: 'Name',
  Position: 'Position',
  Age: 'Age',
  Salary: 'Salary',
};

const position = {
  Name: 0,
  Position: 1,
  Age: 2,
  Salary: 3,
};

function sortTableASC(elems, sortName) {
  const positionNow = position[sortName];

  switch (sortName) {
    case sortElems.Name:
    case sortElems.Position:
      elems
        .sort((a, b) => {
          return a.children[positionNow].textContent.localeCompare(
            b.children[positionNow].textContent,
          );
        })
        .map((tr) => {
          tbody.append(tr);
        });
      break;

    case sortElems.Age:
      elems
        .sort((a, b) => {
          return (
            +a.children[positionNow].textContent -
            +b.children[positionNow].textContent
          );
        })
        .map((tr) => {
          tbody.append(tr);
        });
      break;

    case sortElems.Salary:
      elems
        .sort((a, b) => {
          return (
            +a.children[positionNow].textContent.slice(1).replace(',', '') -
            +b.children[positionNow].textContent.slice(1).replace(',', '')
          );
        })
        .map((tr) => {
          tbody.append(tr);
        });
      break;

    default:
      break;
  }
}

head.forEach((item) => {
  item.addEventListener('click', (e) => {
    sortTableASC(body, e.target.textContent);
  });
});

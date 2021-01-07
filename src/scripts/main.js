'use strict';

const table = document.querySelector('table');
const header = document.querySelector('thead');
const categories = header.querySelector('tr');
const tbody = [...table.tBodies][0];
const rows = tbody.rows;

categories.addEventListener('click', (e) => {
  const title = e.target.textContent;
  const i = e.target.cellIndex;
  let sorted = [];

  switch (true) {
    case (title === 'Name' || title === 'Position') :
      sorted = [...rows].sort((a, b) => {
        const aWord = [...a.cells][i].textContent;
        const bWord = [...b.cells][i].textContent;

        return aWord.localeCompare(bWord);
      });

      break;

    case (title === 'Age') :
      sorted = [...rows].sort((a, b) => {
        return [...a.cells][i].textContent - [...b.cells][i].textContent;
      });

      break;

    case (title === 'Salary') :
      sorted = [...rows].sort((a, b) => {
        const aConverted = xChange([...a.cells][i].textContent);
        const bConverted = xChange([...b.cells][i].textContent);

        return aConverted - bConverted;
      });

      break;
  }

  tbody.append(...sorted);
});

function xChange(str) {
  return +str.split(',').join('').replace('$', '');
}

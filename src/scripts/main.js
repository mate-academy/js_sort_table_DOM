'use strict';

const tableBody = document.querySelector('tbody');

const rows = tableBody.querySelectorAll('tr');

const tableHead = document.querySelector('thead');

const rowsArray = [...rows];

tableHead.addEventListener('click', e => {
  const index = e.target.cellIndex;

  rowsArray.sort((a, b) => {
    const a1 = a.children[index].innerText;
    const b1 = b.children[index].innerText;

    if (e.target.innerText === 'Salary') {
      return delete$(a1) - delete$(b1);
    } else {
      return a1.localeCompare(b1);
    }
  }
  );

  for (const row of rowsArray) {
    tableBody.append(row);
  }
}
);

const delete$ = (string) => +string.slice(1).split(',').join('');

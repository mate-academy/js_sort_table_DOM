/* eslint-disable prettier/prettier */
'use strict';

const tbody = document.querySelector('tbody');
const thead = document.querySelector('thead');

thead.addEventListener('click', (e) => {
  const th = e.target.closest('th');

  if (!th) {
    return;
  }

  const index = [...th.parentElement.children].indexOf(th);

  const tableArray = [...tbody.rows];

  tableArray.sort((item1, item2) =>
    item1.cells[index].textContent.localeCompare(
      item2.cells[index].textContent, undefined, {numeric: true},
    ));

  tableArray.forEach((item) => tbody.appendChild(item));
});


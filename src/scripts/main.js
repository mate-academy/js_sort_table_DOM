'use strict';

const tableHeader = document.querySelectorAll('thead tr')[0];
const tableRows = document.querySelectorAll('tbody')[0];

tableHeader.addEventListener('click', e => {
  const indexOfColumn = [...tableHeader.children].findIndex(index =>
    index === e.target
  );
  const sortedRows = [...tableRows.children].sort((a, b) => {
    const first = a.children[indexOfColumn].innerText;
    const second = b.children[indexOfColumn].innerText;

    if (first.includes('$')) {
      return first.replace(',', '').slice(1) - second.replace(',', '').slice(1);
    }

    return first.localeCompare(second);
  });

  tableRows.append(...sortedRows);
});

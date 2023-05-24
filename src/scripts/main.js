'use strict';

const header = document.querySelector('tr');
const rows = document.querySelector('tbody');

header.addEventListener('click', e => {
  const indexOfColumn = [...header.children].findIndex(index =>
    index === e.target
  );
  const sortedRows = [...rows.children].sort((a, b) => {
    const first = a.children[indexOfColumn].innerText;
    const second = b.children[indexOfColumn].innerText;

    if (first.includes('$')) {
      return first.replace(',', '').slice(1) - second.replace(',', '').slice(1);
    }

    return first.localeCompare(second);
  });

  rows.append(...sortedRows);
});

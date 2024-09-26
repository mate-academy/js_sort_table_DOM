'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const rows = [...tbody.rows];

function getReplace(data, i) {
  return data.cells[i].innerText.replace(/[$,]/g, '');
};

thead.addEventListener('click', event => {
  const index = event.target.cellIndex;

  const sortedRows = rows.sort((a, b) => (
    (typeof getReplace(a, index) === 'string')
      ? getReplace(a, index).localeCompare(getReplace(b, index))
      : getReplace(a, index) - getReplace(b, index)
  ));

  tbody.append(...sortedRows);
});

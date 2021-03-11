'use strict';

function convertStringToNumber(string) {
  if (string.includes('$')) {
    return Number(string.replace(/[$,]/g, ''));
  }

  return Number(string);
}

function makeSortTablet(tablet) {
  const thead = tablet.querySelector('thead');
  const tbody = tablet.querySelector('tbody');

  // eslint-disable-next-line no-shadow
  thead.addEventListener('click', () => {
    const th = event.target.closest('th');

    if (!th) {
      return;
    }

    const column = th.cellIndex;
    const rows = [...tbody.children];

    rows.sort((rowA, rowB) => {
      const valueA = rowA.cells[column].textContent;
      const valueB = rowB.cells[column].textContent;

      if (convertStringToNumber(valueA)) {
        return convertStringToNumber(valueA) - convertStringToNumber(valueB);
      } else {
        return valueA > valueB ? 1 : -1;
      }
    });

    for (const row of rows) {
      tbody.appendChild(row);
    }
  });
}

makeSortTablet(
  document.querySelector('table')
);

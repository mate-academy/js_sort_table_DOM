'use strict';

function sortTableByProretry(e) {
  const tableEl = e.currentTarget.closest('table');
  const tableBody = tableEl.querySelector('tbody');
  const sortPropIndex = e.target.cellIndex;
  const rows = [...tableBody.rows]
    .map(tr => ({
      sortValue: tr.cells[sortPropIndex].innerText,
      element: tr,
    }));

  rows.sort(({ sortValue: value1 }, { sortValue: value2 }) => {
    switch (true) {
      case value1[0] === '$': {
        const salary1 = parseFloat(value1.slice(1));
        const salary2 = parseFloat(value2.slice(1));

        return salary1 - salary2;
      }

      case !isNaN(parseInt(value1)): {
        const age1 = parseInt(value1);
        const age2 = parseInt(value2);

        return age1 - age2;
      }

      default: {
        return value1.localeCompare(value2);
      }
    }
  });

  rows.forEach(({ element }) => tableBody
    .insertAdjacentElement('beforeend', element));
}

const table = document.querySelector('table');
const tableHead = table.querySelector('thead');

tableHead.addEventListener('click', sortTableByProretry);

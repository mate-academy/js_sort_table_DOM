'use strict';

const table = document.querySelector('table');
const body = document.querySelector('tbody');
const rows = body.querySelectorAll('tr');

const rowsObj = [...rows].map(x => {
  const columns = x.querySelectorAll('td');
  const columnsArr = [...columns].map(y => y.innerText);

  return { ...columnsArr };
});

function sort(e) {
  if (e.target.tagName === 'TH') {
    const indexOfTitle = e.target.cellIndex;

    const sortedRows = rowsObj.sort((x, y) => {
      let prevObj = x[indexOfTitle];
      let nextObj = y[indexOfTitle];

      if (prevObj[0] === '$') {
        prevObj = +prevObj.slice(1).split(',').join('.');
        nextObj = +nextObj.slice(1).split(',').join('.');
      }

      return isNaN(prevObj)
        ? prevObj.localeCompare(nextObj)
        : prevObj - nextObj;
    });

    const sortedTable = document.createElement('tbody');

    for (const row of sortedRows) {
      sortedTable.insertAdjacentHTML('beforeend', `
      <tr>
      ${
  Object.values(row).map(x => `
          <td>${x}</td>
        `).join('')
}
      </tr>
    `);
    };

    body.innerHTML = sortedTable.innerHTML;
  }
}

table.addEventListener('click', sort);

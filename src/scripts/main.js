'use strict';

// write code here
function sortTable(header) {
  // GET CHOSEN COLUMN
  const headers = document.querySelectorAll('thead tr th');
  let tableColumn;

  for (let i = 0; i < headers.length; i++) {
    if (headers[i].innerText === header) {
      tableColumn = i;
    }
  }

  // CREATE AND SORT ELEMENTS IN THE COLUMN
  const table = document.querySelector('table');
  const tBody = table.tBodies[0];
  const list = [];

  for (let i = 0; i < tBody.rows.length; i++) {
    list.push(tBody.rows[i].cells[tableColumn].innerText);
  }

  if (header === 'Salary' || header === 'Age') {
    list.sort((a, b) => {
      const x = +a.replace(/[$,]/ig, '');
      const y = +b.replace(/[$,]/ig, '');

      return x - y;
    });
  } else {
    list.sort((a, b) => {
      return a.localeCompare(b);
    });
  }

  // SORT ROWS IN TABLE
  for (const element of list) {
    for (let i = 0; i < tBody.children.length; i++) {
      if (element === tBody.rows[i].cells[tableColumn].innerHTML) {
        const tRow = tBody.rows[i];

        tBody.append(tRow);
      }
    }
  }
}

document.addEventListener('click', e => {
  if (e.target.parentElement.parentElement.tagName === 'THEAD') {
    sortTable(e.target.innerText);
  }
});

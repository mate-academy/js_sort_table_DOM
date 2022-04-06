'use strict';

const headers = document.querySelector('thead');
const body = document.querySelector('tbody');
const rows = body.querySelectorAll('tr');
const arrRows = [...rows];

headers.addEventListener('click', (e) => {
  if (e.target.tagName !== 'TH') {
    return;
  }

  const index = e.target.cellIndex;
  const headerName = e.target.innerHTML;
  var sorted;

  if (headerName === 'Name' || headerName === 'Position'){
    sorted = arrRows.sort((a, b) => {
      const elementA = a.cells[index].innerHTML;
      const elementB = b.cells[index].innerHTML;
      return elementA.localeCompare(elementB);
    }) 
  }
  if (headerName === 'Age' || headerName === 'Salary'){
    sorted = arrRows.sort((a, b) => {
      const elementA = a.cells[index].innerHTML.replace(/\$|,/g, '');
      const elementB = b.cells[index].innerHTML.replace(/\$|,/g, '');
      return elementA - elementB;
    })
  }

  body.append(...sorted);
});

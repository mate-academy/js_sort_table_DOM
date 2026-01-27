'use strict';

const tableHeader = document.querySelector('thead');
const tableBody = document.querySelector('tbody');

tableHeader.addEventListener('click', (e) => {
  const bodyRows = tableBody.querySelectorAll('tr');
  const th = e.target.closest('th');
  const tr = th.closest('tr');
  const headers = tr.children;
  const index = [...headers].indexOf(th);

  const sortedRows = [...bodyRows].sort((a, b) => {
    const contentA = a.cells[index].textContent.replace(/[$,]/g, '');
    const contentB = b.cells[index].textContent. replace(/[$,]/g, '');
    const numA = Number(contentA);
    const numB = Number(contentB);

    if (!isNaN(numA) && !isNaN(numB)) {
      return numA - numB;
    } else {
      return contentA.localeCompare(contentB);
    }
  });

  sortedRows.forEach(row => tableBody.append(row));
})

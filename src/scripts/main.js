'use strict';

const thead = document.querySelector('thead');

thead.addEventListener('click', (action) => {
  const clickedTh = action.target.closest('th');

  if (!clickedTh) {
    return;
  }

  const theElem = Array.from(thead.querySelectorAll('th'));
  const index = theElem.indexOf(clickedTh);

  const tbody = document.querySelector('tbody');
  const rows = Array.from(tbody.querySelectorAll('tr'));

  rows.sort((a, b) => {
    const cellA = a.cells[index].textContent.toLowerCase();
    const cellB = b.cells[index].textContent.toLowerCase();

    if (cellA.startsWith('$')) {
      const cleanA = cellA.split('$').join('').split(',').join('');
      const cleanB = cellB.split('$').join('').split(',').join('');

      const numA = parseFloat(cleanA);
      const numB = parseFloat(cleanB);

      return numA - numB;
    }

    return cellA.localeCompare(cellB);
  });

  tbody.innerHTML = '';
  rows.forEach((row) => tbody.appendChild(row));
});

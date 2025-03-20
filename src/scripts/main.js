'use strict';

const table = document.querySelector('table');
const headersElements = table.querySelectorAll('th');
const tableBody = table.querySelector('tbody');

headersElements.forEach((e, i) => {
  e.addEventListener('click', () => {
    const tr = Array.from(tableBody.querySelectorAll('tr'));

    tr.sort((tdOne, tdTwo) => {
      const rowOne = tdOne.children[i].textContent.trim();
      const rowTwo = tdTwo.children[i].textContent.trim();

      const typeOne = isNaN(rowOne) ? rowOne : parseFloat(rowOne);
      const typeTwo = isNaN(rowTwo) ? rowTwo : parseFloat(rowTwo);

      return typeOne > typeTwo ? 1 : -1;
    });

    tableBody.innerHTML = '';

    tr.forEach((t) => tableBody.appendChild(t));
  });
});

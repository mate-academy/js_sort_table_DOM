'use strict';

const table = document.querySelector('table');
const header = table.querySelectorAll('th');

header.forEach(element => {
  element.addEventListener('click', (event) => {
    const line = Array.from(header).indexOf(event.target);
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));

    rows.sort((a, b) => {
      const cellA = a.children[line].textContent.trim();
      const cellB = b.children[line].textContent.trim();
      return cellA.localeCompare(cellB, 'en', {numeric: true});
    })
    tbody.innerHTML = '';
    rows.forEach(row => tbody.appendChild(row));
  })
})

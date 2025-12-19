'use strict';

const headers = document.querySelectorAll('th');
const table = document.querySelector('table');
let tbody;

for (const elem of table.children) {
  if (elem.tagName === 'TBODY') {
    tbody = elem;
  }
}

for (const header of headers) {
  header.addEventListener('click', (e) => {
    const thIndex = [...header.parentElement.children].indexOf(header);
    const rows = [...tbody.children];

    rows.sort((elem1, elem2) => {
      const valA = elem1.children[thIndex].textContent;
      const valB = elem2.children[thIndex].textContent;

      if (!isNaN(parseFloat(valA))) {
        return parseFloat(valA) - parseFloat(valB);
      } else {
        return valA.localeCompare(valB);
      }
    });

    rows.forEach((row) => tbody.appendChild(row));
  });
}

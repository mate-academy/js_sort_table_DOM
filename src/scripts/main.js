'use strict';

const allHeadlines = document.querySelectorAll('th');
const tBody = document.querySelector('tbody');
const allRows = Array.from(tBody.querySelectorAll('tr'));

for (let i = 0; i < allHeadlines.length; i++) {
  allHeadlines[i].addEventListener('click', () => {
    const sortedRows = allRows.sort((a, b) => {
      const aText = a.cells[i].textContent.trim();
      const bText = b.cells[i].textContent.trim();

      const aV = parseFloat(aText.replace(/[$,]/g, '')) || aText;
      const bV = parseFloat(bText.replace(/[$,]/g, '')) || bText;

      return aV < bV ? -1 : aV > bV ? 1 : 0;
    });

    tBody.innerHTML = '';
    sortedRows.forEach((row) => tBody.appendChild(row));
  });
}

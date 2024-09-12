'use strict';

const theadList = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const tbodyRows = [...tbody.querySelectorAll('tr')];

// Compare the content based on the column index
theadList.addEventListener('click', (e) => {
// Get the index of the clicked cell
  const index = e.target.cellIndex;

  // Sort the rows in the <tbody> based on the clicked cell's content
  tbodyRows.sort((a, b) => {
    const aContent = a.cells[index].textContent;
    const bContent = b.cells[index].textContent;
    // Compare the content based on the column index

    switch (index) {
      case 0:
      case 1:

        return aContent.localeCompare(bContent);

      case 2:

        return aContent - bContent;

      case 3:
        const toNumber = (item) => item.slice(1).split(',').join('');

        return toNumber(aContent) - toNumber(bContent);
      default:
    }
  });

  // Append the sorted rows back to the <tbody>
  tbodyRows.forEach(item => tbody.append(item));
});

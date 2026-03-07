'use strict';

const table = document.querySelector('table');
const headers = table.querySelectorAll('thead th');

headers.forEach((th) => {
  th.addEventListener('click', (e) => {
    const thClicked = e.currentTarget;
    const index = thClicked.cellIndex;
    const elToSort = Array.from(table.querySelectorAll('tbody tr'));

    elToSort.sort((a, b) => {
      const textA = a.children[index].textContent.trim();
      const textB = b.children[index].textContent.trim();
      const numA = Number(textA);
      const numB = Number(textB);

      if (!Number.isNaN(numA) && !Number.isNaN(numB)) {
        return numA - numB;
      } else {
        return textA.localeCompare(textB);
      }
    });

    const tbody = table.querySelector('tbody');

    tbody.innerHTML = '';
    tbody.append(...elToSort);
  });
});

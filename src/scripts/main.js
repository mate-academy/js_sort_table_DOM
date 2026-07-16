'use strict';

const table = document.querySelector('table');
const tableTh = table.querySelectorAll('th');

const tbody = table.querySelector('tbody');

tableTh.forEach((th, index) => {
  th.addEventListener('click', () => {
    const bodyTr = document.querySelectorAll('tbody tr');
    const trArr = [...bodyTr];

    trArr.sort((rowA, rowB) => {
      const textA = rowA.children[index].textContent;
      const textB = rowB.children[index].textContent;

      const numA = parseFloat(textA.replaceAll('$', '').replaceAll(',', '.'));
      const numB = parseFloat(textB.replaceAll('$', '').replaceAll(',', '.'));

      if (!isNaN(numA) && !isNaN(numB)) {
        return numA - numB;
      }

      return textA.localeCompare(textB);
    });

    tbody.append(...trArr);
  });
});

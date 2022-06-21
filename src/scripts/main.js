'use strict';

// write code here
const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');

thead.addEventListener('click', (e) => {
  if (!e.target) {
    return;
  }

  const index = e.target.cellIndex;
  const tbodyChildren = [...tbody.children];

  tbodyChildren.sort((a, b) => {
    const elemA = a.cells[index].textContent.replace(/[$,]/g, '');
    const elemB = b.cells[index].textContent.replace(/[$,]/g, '');

    return isNaN(elemA)
      ? elemA.localeCompare(elemB)
      : elemA - elemB;
  });

  tbody.append(...tbodyChildren);
});

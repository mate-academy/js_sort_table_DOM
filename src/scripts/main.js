'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');

thead.addEventListener('click', (e) => {
  const cellIndex = e.target.cellIndex;

  const data = [...tbody.children];

  data.sort((a, b) => {
    const contentA = a.cells[cellIndex].textContent;
    const contentB = b.cells[cellIndex].textContent;

    if (contentA.toUpperCase() !== contentA.toLowerCase()) {
      return contentA.localeCompare(contentB);
    }

    if (parseInt(contentA)) {
      return contentA - contentB;
    } else {
      return parseInt(contentA.slice(1)) - parseInt(contentB.slice(1));
    }
  });

  tbody.append(...data);
});

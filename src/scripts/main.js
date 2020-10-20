'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const data = [...tbody.children];

thead.addEventListener('click', (event) => {
  const cellIndex = event.target.cellIndex;

  const sortedData = data.sort((prev, cur) => {
    const firstData = prev.cells[cellIndex].textContent.replace(/[,$]/g, '');
    const secondData = cur.cells[cellIndex].textContent.replace(/[,$]/g, '');

    if (+firstData) {
      return firstData - secondData;
    }

    return firstData.localeCompare(secondData);
  });

  tbody.append(...sortedData);
});

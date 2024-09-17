'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const data = [...tbody.rows];

thead.addEventListener('click', (event) => {
  const cellIndex = event.target.cellIndex;

  const sortedData = data.sort((prev, cur) => {
    const firstData = fixedData(prev);
    const secondData = fixedData(cur);

    if (+firstData) {
      return firstData - secondData;
    }

    return firstData.localeCompare(secondData);
  });

  function fixedData(dataString) {
    return dataString.cells[cellIndex].textContent.replace(/[,$]/g, '');
  }

  tbody.append(...sortedData);
});

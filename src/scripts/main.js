'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');

thead.addEventListener('click', (e) => {
  const currentTarget = e.target;

  if (currentTarget.tagName === 'TH') {
    const index = currentTarget.cellIndex;

    const array = [...tbody.rows];

    array.sort((a, b) => {
      const aValue = a.cells[index].textContent.replace(/[$,]/g, '');
      const bValue = b.cells[index].textContent.replace(/[$,]/g, '');

      if (!isNaN(aValue) && !isNaN(bValue)) {
        return aValue - bValue;
      }

      return aValue.localeCompare(bValue);
    });

    array.forEach((elem) => {
      tbody.appendChild(elem);
    });
  }
});

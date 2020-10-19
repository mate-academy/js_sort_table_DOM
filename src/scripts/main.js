'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');

thead.addEventListener('click', function(event) {
  const index = event.target.cellIndex;

  const sortedInfo = [...tbody.children].sort((current, next) => {
    const convertCurrent = current.cells[index].innerText.replace(/[$,]/g, '');
    const convertNext = next.cells[index].innerText.replace(/[$,]/g, '');

    if (isNaN(convertCurrent)) {
      return convertCurrent.localeCompare(convertNext);
    }

    return convertCurrent - convertNext;
  });

  tbody.append(...sortedInfo);
});

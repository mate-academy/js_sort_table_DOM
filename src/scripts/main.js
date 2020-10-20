'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');

thead.addEventListener('click', function(event) {
  const index = event.target.cellIndex;

  const sortedInfo = [...tbody.children].sort((current, next) => {
    const first = convertText(current);
    const second = convertText(next);

    if (isNaN(first)) {
      return first.localeCompare(second);
    }

    return first - second;
  });

  function convertText(tr) {
    return tr.cells[index].innerText.replace(/[$,]/g, '');
  }

  tbody.append(...sortedInfo);
});

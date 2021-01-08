'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');

const sortingHandler = (e) => {
  const index = e.target.cellIndex;

  function convertText(tr) {
    return tr.cells[index].innerText.replace(/[$,]/g, '');
  };

  const sortedInfo = [...tbody.children]
    .sort((current, next) => {
      const first = convertText(current);
      const second = convertText(next);

      if (isNaN(first)) {
        return first.localeCompare(second);
      }

      return first - second;
    });

  tbody.append(...sortedInfo);
};

thead.addEventListener('click', sortingHandler);

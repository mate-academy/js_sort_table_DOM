'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');

const tableRows = [...tbody.rows];

thead.addEventListener('click', () => {
  const onlyNumbers = string => {
    const result = string.replace(/[$,]/g, '');

    return result.length ? +result : NaN;
  };

  tableRows.sort((a, b) => {
    const first = a.children[event.target.cellIndex].innerText;
    const second = b.children[event.target.cellIndex].innerText;

    return isNaN(onlyNumbers(first)) ? first.localeCompare(second)
      : onlyNumbers(first) - onlyNumbers(second);
  }
  );
  tbody.append(...tableRows);
}
);

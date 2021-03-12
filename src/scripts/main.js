'use strict';

const mainTable = document.querySelector('table');

const tbody = document.querySelector('tbody');
const thead = document.querySelector('thead');
const rows = [...tbody.rows];

const headers = [...mainTable.rows[0].cells];

function formatText(tableValue) {
  return tableValue.replace(/[^a-zA-Z0-9_-]/g, '');
}

thead.parentNode.addEventListener('click', (clickEvent) => {
  if (clickEvent.target.tagName === 'TH') {
    const cellIndex = headers.indexOf(clickEvent.target);

    const sortedElements = rows.sort(
      (currentTbodyElement, nextTbodyElement) => {
        const value = formatText(
          currentTbodyElement.cells[cellIndex].textContent
        );
        const nextValue = formatText(
          nextTbodyElement.cells[cellIndex].textContent
        );

        return isNaN(parseInt(value))
          ? value.localeCompare(nextValue)
          : parseInt(value) - parseInt(nextValue);
      });

    tbody.append(...sortedElements);
  };
});

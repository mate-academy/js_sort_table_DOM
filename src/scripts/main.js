'use strict';

const mainTable = document.querySelector('table');

const tbody = mainTable.tBodies[0];
const thead = mainTable.tHead;
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

        const valuesAsNumber = +formatText(value);

        const nextValue = formatText(
          nextTbodyElement.cells[cellIndex].textContent
        );

        return valuesAsNumber
          ? valuesAsNumber - parseInt(+nextValue)
          : value.localeCompare(nextValue);
      });

    tbody.append(...sortedElements);
  };
});

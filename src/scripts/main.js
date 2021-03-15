'use strict';

const mainTable = document.querySelector('table');

const tbody = mainTable.tBodies[0];
const thead = mainTable.tHead;

const headers = [...mainTable.rows[0].cells];

function formatText(tableValue) {
  return tableValue.replace(/[^a-zA-Z0-9_-]/g, '');
}

function sortString(list, index) {
  return list.sort(
    (currentElement,
      nextElement
    ) =>
      currentElement.cells[index].textContent
        .localeCompare(nextElement.cells[index].textContent)
  );
}

function sortNumber(list, index) {
  return list.sort(
    (currentElement,
      nextElement
    ) =>
      formatText(currentElement.cells[index].textContent)
      - formatText(nextElement.cells[index].textContent)
  );
}

thead.parentNode.addEventListener('click', (clickEvent) => {
  const cellIndex = headers.indexOf(clickEvent.target);
  const isColumn = clickEvent.target.tagName === 'TH';
  const rows = [...tbody.rows];

  if (!isColumn) {
    return;
  }

  let sortedList;

  switch (clickEvent.target.textContent) {
    case 'Name' :
      sortedList = sortString(rows, cellIndex);
      break;
    case 'Position' :
      sortedList = sortString(rows, cellIndex);
      break;
    case 'Age' :
      sortedList = sortNumber(rows, cellIndex);
      break;
    case 'Salary':
      sortedList = sortNumber(rows, cellIndex);
      break;
  }
  tbody.append(...sortedList);
});

'use strict';

const mainTable = document.querySelector('table');

const tbody = document.querySelector('tbody');
const trElemnets = [...tbody.rows];

const thElements = [...mainTable.rows[0].cells];

function formatText(tableValue) {
  return tableValue.replace(/[^a-zA-Z0-9_-]/g, '');
}

mainTable.addEventListener('click', (clickHandler) => {
  if (clickHandler.target.tagName === 'TH') {
    const cellIndex = thElements.indexOf(clickHandler.target);

    const sortedElements = trElemnets.sort(
      (currentTbodyElement, nextTbodyElement) => {
        const Value = formatText(
          currentTbodyElement.cells[cellIndex].textContent
        );
        const nextValue = formatText(
          nextTbodyElement.cells[cellIndex].textContent
        );

        return isNaN(parseInt(Value))
          ? Value.localeCompare(nextValue)
          : parseInt(Value) - parseInt(nextValue);
      });

    tbody.append(...sortedElements);
  };
});

// let previousElement;

// document.body.addEventListener('click', clickEvent => {
//   clickEvent.preventDefault();

//   if (previousElement) {
//     previousElement.style.border = '';
//   }
//   previousElement = clickEvent.target;
//   previousElement.style.border = "3px solid #0000FF";

// })

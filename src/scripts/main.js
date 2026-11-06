'use strict';

// для сортировки будут перемещатся tr теги

const rows = [...document.querySelectorAll('tr')];
const headings = rows.splice(0, 1);

// clearing the array from unnecessary rows
rows.splice(-1, 1);

function sortFunction(chosenNode, indexOfChosenNode) {
  let callback;
  const dataType = chosenNode.textContent.trim();

  if (dataType === 'Name' || dataType === 'Position') {
    callback = (currentRow, nextRow) => {
      const textA = currentRow.children[indexOfChosenNode].textContent;
      const textB = nextRow.children[indexOfChosenNode].textContent;

      return textA.localeCompare(textB);
    };
  } else if (dataType === 'Age') {
    callback = (currentRow, nextRow) => {
      const textA = +currentRow.children[indexOfChosenNode].textContent;
      const textB = +nextRow.children[indexOfChosenNode].textContent;

      return textA - textB;
    };
  } else {
    callback = (currentRow, nextRow) => {
      const textA = currentRow.children[indexOfChosenNode].textContent.replace(
        /[$,]/g,
        '',
      );

      const textB = nextRow.children[indexOfChosenNode].textContent.replace(
        /[$,]/g,
        '',
      );

      return textA - textB;
    };
  }

  rows.sort(callback);

  document.querySelector('table tbody').append(...rows);
}

headings[0].addEventListener('click', (e) => {
  sortFunction(e.target, e.target.cellIndex);
});

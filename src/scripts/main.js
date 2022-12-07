'use strict';

const tableHead = document.querySelector('thead');
const headers = tableHead.querySelectorAll('th');
const rows = document.querySelector('tbody').querySelectorAll('tr');
const headerText = {};
let count;

for (let i = 0; i < [...headers].length; i++) {
  headerText[headers[i].textContent] = i;
}

tableHead.addEventListener('click', action => {
  const targetElement = action.target;
  const columntIndex = headerText[targetElement.textContent];

  function replace(prev, current, compareCondition) {
    if (compareCondition) {
      count++;
      const prevContent = prev.innerHTML;
      const currentContent = current.innerHTML;

      prev.innerHTML = currentContent;
      current.innerHTML = prevContent;
    }  
  }

  if (!targetElement.matches('th')) {
    return;
  }

  do {
    count = 0;

    [...rows].sort((currentRow, prevRow) => {
      const prevText = prevRow.children[columntIndex].textContent;
      const currentText = currentRow.children[columntIndex].textContent;

      if (prevText[0].match(/[A-Z]/i)) {
        replace(prevRow, currentRow, prevText.localeCompare(currentText) === 1);
      } else {
        const prevNumber
          = Number(prevText.split(',').join('').split('$').join(''));
        const currentNumber
          = Number(currentText.split(',').join('').split('$').join(''));

        replace(prevRow, currentRow, prevNumber > currentNumber);
      }
    });
  } while (count > 0);
});

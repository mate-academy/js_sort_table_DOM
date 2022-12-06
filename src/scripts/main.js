'use strict';

const tableHead = document.querySelector('thead');
const headers = tableHead.querySelectorAll('th');
const tableBody = document.querySelector('tbody');
const rows = tableBody.querySelectorAll('tr');
const headerText = {};
let count;

for (let i = 0; i < [...headers].length; i++) {
  headerText[headers[i].textContent] = i;
}

tableHead.addEventListener('click', action => {
  const targetElement = action.target;
  const columntIndex = headerText[targetElement.textContent];

  function replace(prev, current) {
    const prevContent = prev.innerHTML;
    const currentContent = current.innerHTML;

    prev.innerHTML = currentContent;
    current.innerHTML = prevContent;
  }

  if (!targetElement.matches('th')) {
    return;
  }

  do {
    count = 0;

    for (let i = 1; i < [...rows].length; i++) {
      const prevText = rows[i - 1].children[columntIndex].textContent;
      const currentText = rows[i].children[columntIndex].textContent;
      const prev = rows[i - 1];
      const current = rows[i];

      if (prevText[0].match(/[A-Z]/i)) {
        if (prevText.localeCompare(currentText) === 1) {
          count++;
          replace(prev, current);
        }
      } else {
        const prevNumber
          = Number(prevText.split(',').join('').split('$').join(''));
        const currentNumber
          = Number(currentText.split(',').join('').split('$').join(''));

        if (prevNumber > currentNumber) {
          count++;
          replace(prev, current);
        }
      }
    }
  } while (count > 0);
});

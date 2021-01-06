'use strict';

const tableHead = document.querySelector('thead');
const tablePeople = document.querySelector('tbody');

tableHead.addEventListener('click', (event) => {
  const target = event.target.cellIndex;

  const sortedInfo = [...tablePeople.children].sort((a, b) => {
    const firstElement = convertText(a);
    const secondElement = convertText(b);

    if (isNaN(firstElement)) {
      return firstElement.localeCompare(secondElement);
    }

    return firstElement - secondElement;
  });

  function convertText(tr) {
    return tr.cells[target].innerText.replace(/[$,]/g, '');
  }

  tablePeople.append(...sortedInfo);
});

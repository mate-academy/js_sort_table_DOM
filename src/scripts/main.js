'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
let lines = document.querySelectorAll('tbody tr');

thead.addEventListener('click', (ev) => {
  const targetIndex = ev.target.cellIndex;

  lines = [...lines].sort((a, b) => {
    let firstVal = a.children[targetIndex].textContent;
    let secondVal = b.children[targetIndex].textContent;

    if (firstVal[0] === '$') {
      firstVal = firstVal.slice(1).split(',').join('');
      secondVal = secondVal.slice(1).split(',').join('');
    } else if (isNaN(firstVal)) {
      return firstVal.localeCompare(secondVal);
    };

    return firstVal - secondVal;
  });

  tbody.append(...lines);
});

'use strict';

const headElements = document
  .querySelector('thead')
  .querySelectorAll('th');

function convert(stringNumber) {
  return Number(stringNumber.toLocaleString().replace(/\D/g, ''));
}

for (const item of headElements) {
  item.addEventListener('click', () => {
    const table
      = [...document.querySelector('tbody').querySelectorAll('tr')]
        .sort(compareValues);

    function compareValues(aInput, bInput) {
      let a = aInput.children[item.cellIndex].textContent;
      let b = bInput.children[item.cellIndex].textContent;

      if (convert(a) > 0) {
        a = (convert(a));
        b = (convert(b));
      }

      return a < b ? -1 : 1;
    }
    document.querySelector('tbody').append(...table);
  });
}

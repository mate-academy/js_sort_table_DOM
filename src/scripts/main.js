'use strict';

const headElements = document
  .querySelector('thead')
  .querySelectorAll('th');

function convert(stringNumber) {
  return Number(stringNumber.toLocaleString().replace(/\D/g, ''));
}

for (const item of headElements) {
  item.addEventListener('click', (ev) => {
    const index = ev.target.cellIndex;
    const table
      = [...document.querySelector('tbody')
        .querySelectorAll('tr')]
        .sort((aInput, bInput) => {
          let a = aInput.children[index].textContent;
          let b = bInput.children[index].textContent;

          if (convert(a) > 0) {
            a = (convert(a));
            b = (convert(b));
          }

          return a < b ? -1 : 1;
        });

    document.querySelector('tbody').append(...table);
  });
}

'use strict';

const thead = document.querySelector('thead tr');

thead.addEventListener('click', event => {
  const index = [...thead.children].indexOf(event.target);
  const tbody = document.querySelectorAll('table tbody tr');

  const cells = [...tbody]
    .sort((a, b) => {
      const innerTextA = a.children[index].innerText
        .replace(/[^0-9a-z]/gi, '');
      const innerTextB = b.children[index].innerText
        .replace(/[^0-9a-z]/gi, '');

      return !isNaN(+innerTextA)
        ? (+innerTextA) - (+innerTextB)
        : innerTextA.localeCompare(innerTextB);
    });

  for (const cell of cells) {
    document.querySelector('table tbody').append(cell);
  }
});

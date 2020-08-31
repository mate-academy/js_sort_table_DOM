'use strict';

const thead = document.querySelector('thead tr');

thead.addEventListener('click', event => {
  const colIndex = [...thead.children].indexOf(event.target);
  const peoples = document.querySelectorAll('tbody tr');

  const sortedEmployees = [...peoples]
    .sort((a, b) => {
      const humanA = a.children[colIndex].innerText.replace(/[^0-9a-z]/gi, '');
      const humanB = b.children[colIndex].innerText.replace(/[^0-9a-z]/gi, '');

      return !Number.isNaN(+humanA)
        ? (+humanA) - (+humanB)
        : humanA.localeCompare(humanB);
    });

  document.querySelector('tbody').append(...sortedEmployees);
});

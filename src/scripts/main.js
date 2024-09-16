'use strict';

const thead = document.querySelector('thead tr');

thead.addEventListener('click', event => {
  const categoryIndex = [...thead.children].indexOf(event.target);
  const tbodyRows = document.querySelectorAll('table tbody tr');

  const sortedEmployees = [...tbodyRows]
    .sort((a, b) => {
      const emloyeeA = a.children[categoryIndex].innerText
        .replace(/[^0-9a-z]/gi, '');
      const emloyeeB = b.children[categoryIndex].innerText
        .replace(/[^0-9a-z]/gi, '');

      return !Number.isNaN(+emloyeeA)
        ? (+emloyeeA) - (+emloyeeB)
        : emloyeeA.localeCompare(emloyeeB);
    });

  document.querySelector('table tbody').append(...sortedEmployees);
});

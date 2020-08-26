'use strict';

const thead = document.querySelector('thead tr');

thead.addEventListener('click', event => {
  const index = [...thead.children].indexOf(event.target);
  const tbody = document.querySelectorAll('table tbody tr');

  const sortedEmployees = [...tbody]
    .sort((a, b) => {
      const emloyeeA = a.children[index].innerText
        .replace(/[^0-9a-z]/gi, '');
      const emloyeeB = b.children[index].innerText
        .replace(/[^0-9a-z]/gi, '');

      return !isNaN(+emloyeeA)
        ? (+emloyeeA) - (+emloyeeB)
        : emloyeeA.localeCompare(emloyeeB);
    });

  document.querySelector('table tbody').append(...sortedEmployees);
});

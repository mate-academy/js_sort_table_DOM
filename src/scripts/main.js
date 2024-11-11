'use strict';

let nomberC = 0;
const tbody = document.querySelector('tbody');

document.querySelectorAll('th').forEach((head) => {
  head.addEventListener('click', () => {
    const rows = Array.from(tbody.querySelectorAll('tr'));
    const parents = head.parentNode;
    const children = Array.from(parents.children);

    nomberC = children.indexOf(head);

    rows.sort((rowA, rowB) => {
      const cellA = rowA.children[nomberC].textContent.trim();
      const cellB = rowB.children[nomberC].textContent.trim();

      return cellA.localeCompare(cellB);
    });

    rows.forEach((row) => tbody.appendChild(row));
  });
});

'use strict';

const titles = document.querySelectorAll('table th');

Array.from(titles).forEach((title, text) => {
  title.addEventListener('click', () => {
    sortElements(text);
  });
});

function sortElements(element) {
  const rows = Array.from(document.querySelectorAll('table tbody tr'));

  rows.sort((a, b) => {
    const cellA = a.children[element].textContent.trim();
    const cellB = b.children[element].textContent.trim();

    const numberA = parseFloat(cellA.replace(/[^0-9.-]+/g, ''));
    const numberB = parseFloat(cellB.replace(/[^0-9.-]+/g, ''));

    if (!isNaN(numberA) && !isNaN(numberB)) {
      return numberA - numberB;
    } else {
      return cellA.localeCompare(cellB);
    }
  });

  const body = document.querySelector('tbody');

  rows.forEach((row) => body.appendChild(row));
}

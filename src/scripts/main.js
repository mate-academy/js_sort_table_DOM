'use strict';

addEventListener('click', (event) => {
  const th = event.target.closest('th');

  if (!th) {
    return;
  }

  const index = Array.from(th.parentElement.children).indexOf(th);

  const tbody = document.querySelector('tbody');
  const rows = Array.from(tbody.querySelectorAll('tr'));

  rows.sort((a, b) => {
    const cellA = a.children[index].textContent.trim();
    const cellB = b.children[index].textContent.trim();

    const numA = Number(cellA);
    const numB = Number(cellB);

    const bothNumeric = !isNaN(numA) && !isNaN(numB);

    if (bothNumeric) {
      return numA - numB;
    }

    return cellA.localeCompare(cellB);
  });

  tbody.innerHTML = '';
  rows.forEach((row) => tbody.appendChild(row));
});

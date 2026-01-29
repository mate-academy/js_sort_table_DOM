'use strict';

// write code here
document.querySelectorAll('thead tr th').forEach((th, index) => {
  th.addEventListener('click', (ev) => {
    const rows = Array.from(document.querySelectorAll('tbody tr'));

    rows.sort((a, b) => {
      let valA = a.cells[index].textContent.replace(/[^0-9.-]/g, '');
      let valB = b.cells[index].textContent.replace(/[^0-9.-]/g, '');

      valA = parseFloat(valA);
      valB = parseFloat(valB);

      if (!isNaN(valA) && !isNaN(valB)) {
        return valA - valB;
      }

      return a.cells[index].textContent.localeCompare(
        b.cells[index].textContent,
      );
    });

    const tbody = document.querySelector('tbody');

    tbody.innerHTML = '';
    rows.forEach((row) => tbody.appendChild(row));
  });
});

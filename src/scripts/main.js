'use strict';

// write code herе
document.querySelectorAll('th').forEach((th) => {
  th.addEventListener('click', () => {
    const columnIndex = Array.from(th.parentNode.children).indexOf(th);
    const tbody = document.querySelector('tbody');
    const rows = Array.from(tbody.rows);

    rows.sort((a, b) => {
      let valA = a.cells[columnIndex].textContent.trim();
      let valB = b.cells[columnIndex].textContent.trim();

      if (
        !isNaN(valA.replace(/[$,]/g, '')) &&
        !isNaN(valB.replace(/[$,]/g, ''))
      ) {
        valA = parseFloat(valA.replace(/[$,]/g, ""));
        valB = parseFloat(valB.replace(/[$,]/g, ""));
      }

      return valA > valB ? 1 : -1;
    });

    rows.forEach((row) => tbody.appendChild(row));
  });
});

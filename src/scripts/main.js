document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('th').forEach((header) => {
    header.addEventListener('click', function () {
      const table = header.closest('table');
      const tbody = table.querySelector('tbody');
      const index = Array.from(header.parentNode.children).indexOf(header);
      const rows = Array.from(tbody.querySelectorAll('tr'));

      rows.sort((rowA, rowB) => {
        const cellA = rowA.children[index].textContent.trim();
        const cellB = rowB.children[index].textContent.trim();

        return cellA.localeCompare(cellB, undefined, { numeric: true });
      });

      tbody.innerHTML = '';
      rows.forEach((row) => tbody.appendChild(row));
    });
  });
});

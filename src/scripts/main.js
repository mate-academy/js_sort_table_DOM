document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');
  const headers = table.querySelectorAll('th');
  const tbody = table.querySelector('tbody');

  headers.forEach((header, index) => {
    header.addEventListener('click', () => {
      const rows = Array.from(tbody.querySelectorAll('tr'));

      rows.sort((rowA, rowB) => {
        const cellA = cleanValue(rowA.children[index].textContent);
        const cellB = cleanValue(rowB.children[index].textContent);

        return cellA - cellB || String(cellA).localeCompare(String(cellB));
      });

      rows.forEach((row) => tbody.appendChild(row));
    });
  });

  function cleanValue(value) {
    return parseFloat(value.replace(/[^0-9.]/g, '')) || value.trim();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');
  const headers = table.querySelectorAll('th');
  const tbody = table.querySelector('tbody');

  headers.forEach((header, index) => {
    header.addEventListener('click', () => {
      const rows = Array.from(tbody.querySelectorAll('tr'));

      const isNumeric = !isNaN(
        rows[0].cells[index].textContent.replace(/[$,]/g, ''),
      );

      rows.sort((rowA, rowB) => {
        let a = rowA.cells[index].textContent.trim();
        let b = rowB.cells[index].textContent.trim();

        if (isNumeric) {
          a = parseFloat(a.replace(/[$,]/g, ''));
          b = parseFloat(b.replace(/[$,]/g, ''));
        }

        return a > b ? 1 : -1;
      });

      tbody.innerHTML = '';
      rows.forEach((row) => tbody.appendChild(row));
    });
  });
});

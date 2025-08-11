const table = document.querySelector('table');
const headers = table.querySelectorAll('th');
const tBody = table.querySelector('tbody');

let asc = true;

headers.forEach((header, index) => {
  header.addEventListener('click', () => {
    const rows = Array.from(tBody.querySelectorAll('tr'));

    rows.sort((a, b) => {
      const cellA = a.querySelectorAll('td')[index].textContent.trim();
      const cellB = b.querySelectorAll('td')[index].textContent.trim();

      let valA = cellA;
      let valB = cellB;

      // Якщо колонка Salary — парсимо як число
      if (header.textContent.trim() === 'Salary') {
        valA = parseFloat(cellA.replace(/\$/g, '').replace(/,/g, ''));
        valB = parseFloat(cellB.replace(/\$/g, '').replace(/,/g, ''));
      } else if (!isNaN(cellA) && !isNaN(cellB)) {
        // Якщо це числа (наприклад, Age) - парсимо як числа
        valA = Number(cellA);
        valB = Number(cellB);
      }

      if (valA < valB) {
        return asc ? -1 : 1;
      }

      if (valA > valB) {
        return asc ? 1 : -1;
      }

      return 0;
    });

    rows.forEach((row) => tBody.appendChild(row));
    asc = !asc;
  });
});

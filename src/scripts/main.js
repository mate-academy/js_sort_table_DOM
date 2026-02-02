const table = document.querySelector('table');
const headers = table.querySelectorAll('thead th');
const tbody = table.querySelector('tbody');

// Зберігаємо дані рядків як масив об'єктів
const originalRowsData = Array.from(tbody.querySelectorAll('tr')).map((row) => {
  return Array.from(row.children).map((cell) => cell.textContent.trim());
});

headers.forEach((header, columnIndex) => {
  header.addEventListener('click', () => {
    // Копіюємо дані
    const rowsData = [...originalRowsData];

    rowsData.sort((rowA, rowB) => {
      const valueA = rowA[columnIndex];
      const valueB = rowB[columnIndex];

      // Age
      if (columnIndex === 2) {
        return Number(valueA) - Number(valueB);
      }

      // Salary
      if (columnIndex === 3) {
        const numA = Number(valueA.replace(/[^0-9]/g, ''));
        const numB = Number(valueB.replace(/[^0-9]/g, ''));

        return numA - numB;
      }

      // Name, Position
      return valueA.localeCompare(valueB);
    });

    // Оновлюємо tbody
    tbody.innerHTML = '';

    rowsData.forEach((rowData) => {
      const row = document.createElement('tr');

      rowData.forEach((cellData) => {
        const cell = document.createElement('td');

        cell.textContent = cellData;
        row.appendChild(cell);
      });
      tbody.appendChild(row);
    });
  });
});

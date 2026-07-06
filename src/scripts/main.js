'use strict';

// write code here
const headers = document.querySelector('thead');

headers.querySelectorAll('th').forEach((header, index) => {
  header.addEventListener('click', () => {
    const table = header.closest('table');

    header.classList.toggle('sorted-asc');
    sortTableByHeader(table, header.textContent.toLowerCase());
  });
});

function sortTableByHeader(table, rowName) {
  const tbody = table.querySelector('tbody');

  if (rowName === 'name') {
    const arrayRows = Array.from(tbody.querySelectorAll('tr'));

    tbody.append(
      ...arrayRows.sort((a, b) => {
        return a.cells[0].textContent.localeCompare(b.cells[0].textContent);
      }),
    );
  }

  if (rowName === 'position') {
    const arrayRows = Array.from(tbody.querySelectorAll('tr'));

    tbody.append(
      ...arrayRows.sort((a, b) => {
        return a.cells[1].textContent.localeCompare(b.cells[1].textContent);
      }),
    );
  }

  if (rowName === 'age') {
    const arrayRows = Array.from(tbody.querySelectorAll('tr'));

    tbody.append(
      ...arrayRows.sort(
        (a, b) => a.cells[2].textContent - b.cells[2].textContent,
      ),
    );
  }

  if (rowName === 'salary') {
    const arrayRows = Array.from(tbody.querySelectorAll('tr'));

    tbody.append(
      ...arrayRows.sort(
        (a, b) =>
          Number(a.cells[3].textContent.replace(/[^0-9.-]+/g, '')) -
          Number(b.cells[3].textContent.replace(/[^0-9.-]+/g, '')),
      ),
    );
  }
}

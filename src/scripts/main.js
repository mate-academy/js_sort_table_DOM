'use strict';

const thead = document.querySelector('thead');

thead.addEventListener('click', (e) => {
  const th = e.target.closest('th');

  if (!th) {
    return;
  }

  const tbody = document.querySelector('tbody');
  const rows = [...tbody.querySelectorAll('tr')];

  const index = th.cellIndex;

  if (index < 2) {
    rows.sort((a, b) => {
      return a.cells[index].textContent
        .trim()
        .localeCompare(b.cells[index].textContent.trim());
    });
  }

  if (index > 1) {
    rows.sort(
      (a, b) =>
        +a.cells[index].textContent.replace('$', '').replaceAll(',', '') -
        +b.cells[index].textContent.replace('$', '').replaceAll(',', ''),
    );
  }

  tbody.append(...rows);
});

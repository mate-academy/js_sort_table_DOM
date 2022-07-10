'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const tr = [...tbody.querySelectorAll('tr')];

const tableSort = (item) => {
  const sorted = tr.sort((a, b) => {
    const sortA = a.cells[item].innerText.replace(/\$|,/g, '');
    const sortB = b.cells[item].innerText.replace(/\$|,/g, '');

    if (isNaN(sortA)) {
      return sortA.localeCompare(sortB);
    } else {
      return sortA - sortB;
    }
  });

  return tbody.append(...sorted);
};

thead.addEventListener('click', (e) => {
  const th = e.target.closest('th');

  if (!th || !thead.contains(th)) {
    return;
  }

  const item = e.target.cellIndex;

  tableSort(item);
});

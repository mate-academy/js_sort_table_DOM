'use strict';

const tbody = document.querySelector('tbody');
const rowCollection = document.querySelectorAll('tbody tr');
const sortFieldsRow = document.querySelector('thead tr');

const rowArr = Array.from(rowCollection);
const attributes = rowArr.map((row) => [...row.children]);

function sortBy(sortField, array) {
  const copyArr = [...array];

  switch (sortField) {
    case 'Name':
      return copyArr.sort((a1, a2) =>
        a1[0].textContent.localeCompare(a2[0].textContent));

    case 'Position':
      return copyArr.sort((a1, a2) =>
        a1[1].textContent.localeCompare(a2[1].textContent));

    case 'Age':
      return copyArr.sort(
        (a1, a2) =>
          parseInt(a1[2].textContent) - parseInt(a2[2].textContent),
      );

    case 'Salary':
      return copyArr.sort(
        (a1, a2) =>
          parseInt(a1[3].textContent) - parseInt(a2[3].textContent),
      );

    default:
      return copyArr;
  }
}

sortFieldsRow.addEventListener('click', (e) => {
  if (e.target.tagName === 'TH') {
    const sortedArr = sortBy(e.target.textContent.trim(), attributes);

    while (tbody.firstChild) {
      tbody.removeChild(tbody.firstChild);
    }

    sortedArr.forEach((element) => {
      const tr = document.createElement('tr');

      element.forEach((child) => {
        tr.appendChild(child);
      });
      tbody.appendChild(tr);
    });
  }
});

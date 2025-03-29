'use strict';

const headers = document.querySelectorAll('thead th');

headers.forEach((el) => {
  el.addEventListener('click', function (e) {
    const list = document.querySelectorAll('tbody tr');
    const columnInd = Array.from(headers).indexOf(e.target);
    const tbody = document.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));

    const listArray = Array.from(list);
    const arraOfNames = listArray.map(
      (elem) => elem.children[columnInd].textContent,
    );

    const hasNumber = /\d/.test(arraOfNames[0]);
    let isSorted = [];

    if (columnInd === 3) {
      isSorted = arraOfNames.sort((a, b) => {
        return (
          Number(a.slice(1).replace(',', '.')) -
          Number(b.slice(1).replace(',', '.'))
        );
      });
    } else if (!hasNumber) {
      isSorted = arraOfNames.sort();
    } else {
      isSorted = arraOfNames.sort((a, b) => Number(a) - Number(b));
    }

    rows.forEach((row, i) => {
      if (columnInd === 3) {
        row.children[columnInd].textContent =
          `${isSorted[i].replace('.', ',')}`;
      } else {
        row.children[columnInd].textContent = isSorted[i];
      }
    });
  });
});

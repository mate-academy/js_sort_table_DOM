'use strict';

const tableHeader = document.querySelector('thead');
const tableBody = document.querySelector('tbody');
const tableBodyRows = tableBody.querySelectorAll('tr');

tableHeader.addEventListener('click', (event) => {
  const columnIndex = event.target.cellIndex;
  const sortedRows = sortRows([...tableBodyRows], columnIndex);

  tableBody.append(...sortedRows);
});

function sortRows(rowsList, index) {
  let sortedRowsList = rowsList.sort(
    (a, b) => a.children[index].innerText
      .localeCompare(b.children[index].innerText)
  );

  if (index === 2) {
    sortedRowsList = rowsList.sort(
      (a, b) => Number(a.children[index].innerText)
        - Number(b.children[index].innerText)
    );
  }

  if (index === 3) {
    sortedRowsList = rowsList.sort(
      (a, b) => Number(a.children[index].innerText.slice(1).replace(',', ''))
        - Number(b.children[index].innerText.slice(1).replace(',', ''))
    );
  }

  return sortedRowsList;
}

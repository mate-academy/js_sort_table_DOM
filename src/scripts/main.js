'use strict';

const headers = document.querySelectorAll('thead');
const body = document.querySelector('tbody');

for (const header of headers) {
  header.addEventListener('click', (e) => {
    const rowsArr = Array.from(body.children);

    // for salary colum sorting
    if (rowsArr[0].cells[e.target.cellIndex].textContent[0] === '$') {
      rowsArr.sort((el, el2) =>
        parseFloat(el.cells[e.target.cellIndex]
          .textContent.substring(1).replace(',', '.'),
        )
        - parseFloat(el2.cells[e.target.cellIndex]
          .textContent.substring(1).replace(',', '.'),
        ));
    } else {
      rowsArr.sort((el, el2) => el.cells[e.target.cellIndex].textContent
        .localeCompare(el2.cells[e.target.cellIndex].textContent));
    }

    rowsArr.forEach((row) => body.appendChild(row));
  });
}

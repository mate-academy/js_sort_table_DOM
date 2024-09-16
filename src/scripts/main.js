'use strict';

const headerRow = document.querySelector('thead tr');
const tableBody = document.querySelector('tbody');

headerRow.addEventListener('click', e => {
  if (e.target.tagName === 'TH') {
    const headerElements = headerRow.querySelectorAll('th');

    const clickedHeader = [...headerElements].findIndex(th => {
      return th === e.target;
    });

    const tableRowsArray = [...document.querySelectorAll('tbody tr')];

    const sortedRows = tableRowsArray.sort((a, b) => {
      const aTds = a.querySelectorAll('td');
      const bTds = b.querySelectorAll('td');

      if (aTds[clickedHeader].innerText[0] === '$') {
        return aTds[clickedHeader].innerText
          .localeCompare(bTds[clickedHeader]
            .innerText, undefined, { numeric: true });
      }

      return aTds[clickedHeader]
        .innerText.localeCompare(bTds[clickedHeader].innerText);
    });

    sortedRows.forEach(item => {
      tableBody.append(item);
    });
  }
});

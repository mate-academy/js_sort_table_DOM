'use strict';

const tableHeaders = document.querySelectorAll('th');
const tableBody = document.querySelector('tbody');
const tableRows = [...tableBody.querySelectorAll('tr')];

tableHeaders.forEach(header => {
  header.addEventListener('click', (e) => {
    const index = [...tableHeaders].indexOf(header);

    const sortedRows = tableRows.sort((a, b) => {
      const aValue = a.querySelectorAll('td')[index].innerText;
      const bValue = b.querySelectorAll('td')[index].innerText;

      if (index === 3 || index === 2) {
        return normaliseNumber(aValue) - normaliseNumber(bValue);
      }

      return aValue.localeCompare(bValue);
    });

    tableBody.innerHTML = '';

    sortedRows.forEach(row => {
      tableBody.append(row);
    });
  });
});

const normaliseNumber = function(num) {
  return parseFloat(num.replace('$', '').replace(',', ''));
};

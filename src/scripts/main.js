'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const tableHead = document.querySelector('thead');
  const tableBody = document.querySelector('tbody');
  let sortLowToHigh = true; // true - low to high, false- high to low

  tableHead.addEventListener('click', (e) => {
    const selectedName = e.target.closest('th').textContent;

    if (selectedName) {
      sortTable(tableBody, selectedName);
    }
  });

  function convertTableHeadToArray(tableHeader) {
    const tableHeadElements = tableHeader.firstElementChild.children;

    const tableHeadArray = [...tableHeadElements].map(item => item.textContent);

    return tableHeadArray;
  }

  function findSortIndex(selectedColName) {
    const tableHeader = convertTableHeadToArray(tableHead);

    return tableHeader.indexOf(selectedColName);
  }

  function convertStrToInt(str) {
    const reg = /\D/g;

    const out = parseInt(str.replace(reg, ''));

    return out;
  }

  function sortTable(table, condition) {
    const sortIndex = findSortIndex(condition);
    const rowsData = table.children;

    const sortedData = [...rowsData].sort((row1, row2) => {
      const dataTypeOfSort
        = convertStrToInt(row1.children[sortIndex].textContent)
          ? 'number'
          : 'string';

      let row1DataToSort;
      let row2DataToSort;
      let sortResult;

      if (dataTypeOfSort === 'number') {
        row1DataToSort = convertStrToInt(row1.children[sortIndex].textContent);
        row2DataToSort = convertStrToInt(row2.children[sortIndex].textContent);

        sortResult = sortLowToHigh
          ? row1DataToSort - row2DataToSort
          : row2DataToSort - row1DataToSort;
      } else {
        row1DataToSort = row1.children[sortIndex].textContent;
        row2DataToSort = row2.children[sortIndex].textContent;

        sortResult = sortLowToHigh
          ? row1DataToSort.localeCompare(row2DataToSort)
          : row2DataToSort.localeCompare(row1DataToSort);
      }

      return sortResult;
    });

    sortLowToHigh = !sortLowToHigh;

    tableBody.innerHTML = '';

    sortedData.forEach(row => {
      tableBody.append(row);
    });
  }
});

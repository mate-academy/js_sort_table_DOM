'use strict';

const table = document.querySelector('table');
const tableHead = table.tHead.rows[0];
const tableBody = table.tBodies[0];

const getParsedData = (firstData, secondData) => {
  const firstParsedData = parseFloat(firstData.replace(/[^\d.-]/g, ''));
  const secondParsedData = parseFloat(secondData.replace(/[^\d.-]/g, ''));

  return [firstParsedData, secondParsedData];
};

const getSortedRows = (rows, sortIndex) => {
  const sortedRows = [...rows].sort((row1, row2) => {
    const firstData = row1.children[sortIndex].textContent;
    const secondData = row2.children[sortIndex].textContent;

    const [
      firstParsedData,
      secondParsedData,
    ] = getParsedData(firstData, secondData);

    if (firstParsedData && secondParsedData) {
      return firstParsedData - secondParsedData;
    }

    return firstData.localeCompare(secondData);
  });

  return sortedRows;
};

const getSortedRowsByField = (sortField) => {
  const tableTitles = [...tableHead.children].map(th => (
    th.textContent
  ));

  const tableTitleIdx = tableTitles.indexOf(sortField);

  if (tableTitleIdx < 0) {
    return;
  }

  const tableRows = [...tableBody.rows];

  const sortedTableRows = getSortedRows(tableRows, tableTitleIdx);

  return sortedTableRows;
};

/* eslint-disable-next-line no-shadow */
const sortTable = (event) => {
  const targetItem = event.target;
  const isHeader = !!targetItem.closest('thead');

  if (!isHeader) {
    return;
  }

  const tableTitle = targetItem.textContent;

  const sortedRows = getSortedRowsByField(tableTitle);

  if (!sortedRows) {
    return;
  }

  tableBody.append(...sortedRows);
};

table.addEventListener('click', sortTable);

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');
  const tBody = document.querySelector('tbody');
  const rowsArray = Array.from(tBody.rows);

  if (!table || !tBody || !rowsArray.length) {
    return;
  }

  const tableFieldsType = ['string', 'string', 'number', 'number'];

  table.addEventListener('click', (e) => {
    const th = e.target.closest('th');

    if (!th) {
      return;
    }

    const columnIndex = th.cellIndex;

    sortColumn(columnIndex, tableFieldsType[columnIndex]);
  });

  function sortColumn(index, type) {
    let copmareFun;

    switch (type) {
      case 'number':
        copmareFun = function (trA, trB) {
          if (checkTD(trA.cells[index], trB.cells[index])) {
            return;
          }

          const numberA = convertToNumber(trA.cells[index].textContent);
          const numberB = convertToNumber(trB.cells[index].textContent);

          if (checkNumber(numberA, numberB)) {
            return;
          }

          return numberA - numberB;
        };
        break;
      case 'string':
        copmareFun = function (trA, trB) {
          if (checkTD(trA.cells[index], trB.cells[index])) {
            return;
          }

          const stringA = trA.cells[index].textContent.trim();
          const stringB = trB.cells[index].textContent.trim();

          return stringA.localeCompare(stringB);
        };
        break;
      default:
        return;
    }
    rowsArray.sort(copmareFun);
    tBody.append(...rowsArray);
  }

  function convertToNumber(currency) {
    return Number(
      currency
        .replace(/\s+/g, '')
        .replace(/[^\d,.-]/g, '')
        .replace(/,/g, '.'),
    );
  }

  function checkTD(tdA, tdB) {
    if (!tdA || !tdB || !tdA.textContent || !tdB.textContent) {
      return true;
    }
  }

  function checkNumber(tdA, tdB) {
    if (isNaN(tdA) || isNaN(tdB)) {
      return true;
    }
  }
});

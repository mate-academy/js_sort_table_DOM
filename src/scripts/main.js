'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const tableFieldsType = ['string', 'string', 'number', 'number'];

  document.addEventListener('click', (e) => {
    const th = e.target.closest('th');

    if (!th) {
      return;
    }

    const table = th.closest('table');

    if (!table) {
      return;
    }

    const tBody = table.querySelector('tbody');

    if (!tBody) {
      return;
    }

    const rowsArray = Array.from(tBody?.rows ?? []);

    if (!rowsArray.length) {
      return;
    }

    const columnIndex = th.cellIndex ?? -1;

    if (columnIndex < 0 || columnIndex >= th.parentElement.cells.length) {
      return;
    }

    if (!tableFieldsType[columnIndex]) {
      return;
    }

    rowsArray.sort(sortColumn(columnIndex, tableFieldsType[columnIndex]));
    tBody.append(...rowsArray);
  });

  function sortColumn(index, type) {
    let copmareFun;

    switch (type) {
      case 'number':
        copmareFun = function (trA, trB) {
          if (checkTD(trA.cells[index], trB.cells[index])) {
            return 0;
          }

          const numberA = convertToNumber(trA.cells[index].textContent);
          const numberB = convertToNumber(trB.cells[index].textContent);

          if (checkNumber(numberA, numberB)) {
            return 0;
          }

          return numberA - numberB;
        };
        break;
      case 'string':
        copmareFun = function (trA, trB) {
          if (checkTD(trA.cells[index], trB.cells[index])) {
            return 0;
          }

          const stringA = trA.cells[index].textContent.trim();
          const stringB = trB.cells[index].textContent.trim();

          return stringA.localeCompare(stringB);
        };
        break;
      default:
        copmareFun = function (trA, trB) {
          if (checkTD(trA.cells[index], trB.cells[index])) {
            return 0;
          }

          const stringA = trA.cells[index].textContent.trim();
          const stringB = trB.cells[index].textContent.trim();

          return stringA.localeCompare(stringB);
        };
        break;
    }

    return copmareFun;
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
    const invalid =
      !tdA ||
      !tdB ||
      tdA.textContent == null ||
      tdB.textContent == null ||
      tdA.textContent.trim() === '' ||
      tdB.textContent.trim() === '';

    return invalid;
  }

  function checkNumber(tdA, tdB) {
    const invalid = Number.isNaN(tdA) || Number.isNaN(tdB);

    return invalid;
  }
});

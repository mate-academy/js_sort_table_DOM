'use strict';

const getTableHeader = document.querySelectorAll('table th');
const getTBody = document.querySelectorAll('tbody tr');

getTableHeader.forEach((header) => {
  // eslint-disable-next-line no-shadow
  header.addEventListener('click', function (event) {
    const getClickOnHeader = event.target.closest('th');

    if (getClickOnHeader && header.textContent === 'Name') {
      const arrForName = [];

      // Для імен
      getTBody.forEach((itemName) => {
        const getCellersName = itemName.cells[0];

        arrForName.push(getCellersName.textContent);
      });

      arrForName.sort();

      // Оновлюємо першу колонку таблиці
      getTBody.forEach((itemName, index) => {
        const getCellersName = itemName.cells[0];

        getCellersName.textContent = arrForName[index] || '';
      });
    }

    if (getClickOnHeader && header.textContent === 'Position') {
      // Для позиції
      const arrPosition = [];

      getTBody.forEach((itemPosition) => {
        const getCellersPosition = itemPosition.cells[1];

        arrPosition.push(getCellersPosition.textContent);
      });

      arrPosition.sort();

      getTBody.forEach((itemPosition, index) => {
        const getCellersPosition = itemPosition.cells[1];

        getCellersPosition.textContent = arrPosition[index] || '';
      });
    }

    if (getClickOnHeader && header.textContent === 'Age') {
      const arrAge = [];

      getTBody.forEach((itemAge) => {
        const getCellersAge = itemAge.cells[2];

        arrAge.push(getCellersAge.textContent);
      });

      arrAge.sort();

      getTBody.forEach((itemAge, index) => {
        const getCellersAge = itemAge.cells[2];

        getCellersAge.textContent = arrAge[index];
      });
    }

    if (getClickOnHeader && header.textContent === 'Salary') {
      const arraySalary = [];

      getTBody.forEach((itemSalary) => {
        const getCellersSalary = itemSalary.cells[3];

        arraySalary.push(getCellersSalary.textContent);
      });

      // eslint-disable-next-line no-inner-declarations
      function transformIntoNumberFromSalary(str) {
        return +str.replace(/[^0-9.-]+/g, '');
      }

      arraySalary.sort(
        (a, b) =>
          transformIntoNumberFromSalary(a) - transformIntoNumberFromSalary(b),
      );

      getTBody.forEach((itemSalary, index) => {
        const getCellersSalary = itemSalary.cells[3];

        getCellersSalary.textContent = arraySalary[index];
      });
    }
  });
});

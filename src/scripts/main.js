'use strict';

const table = document.querySelector('table');

if (table) {
  const headTable = table.querySelector('thead');

  headTable.addEventListener('click', (e) => {
    const th = e.target.closest('th');

    if (!th) {
      return;
    }

    const columnIndex = th.cellIndex;

    const bodyTable = table.querySelector('tbody');
    const bodyItems = bodyTable.querySelectorAll('tr');

    const toNumber = (string) => {
      let result = '';

      result = string.replaceAll(',', '').replaceAll('$', '');

      return +result;
    };

    const arrayBodyItems = Array.from(bodyItems);

    arrayBodyItems.sort((itemFirst, itemSecond) => {
      const tdFirst = itemFirst.cells[columnIndex];
      const tdSecond = itemSecond.cells[columnIndex];

      const firstValue = tdFirst ? tdFirst.textContent : '';
      const secondValue = tdSecond ? tdSecond.textContent : '';

      const firstNumber = toNumber(firstValue);
      const secondNumber = toNumber(secondValue);

      if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
        return firstNumber - secondNumber;
      } else {
        return tdFirst.textContent.localeCompare(tdSecond.textContent);
      }
    });

    bodyTable.append(...arrayBodyItems);
  });
}

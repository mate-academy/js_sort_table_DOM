'use strict';

const head = document.querySelector('thead');
const titles = [...head.children[0].children];

function sortTable(titleIndex) {
  const table = document.querySelector('tbody');
  let isSwitching = true;

  while (isSwitching) {
    isSwitching = false;

    const rows = table.rows;
    let shouldRowsSwitch = false;
    let i;

    for (i = 0; i <= rows.length - 2; i++) {
      const firstRow = rows[i].getElementsByTagName('td')[titleIndex];
      const secondRow = rows[i + 1].getElementsByTagName('td')[titleIndex];

      const firstRowContent = firstRow.innerHTML;
      const secondRowContent = secondRow.innerHTML;

      const isFirstRowNum = Number(firstRowContent);
      const isSecondRowNum = Number(secondRowContent);

      if (isFirstRowNum) {
        if (isFirstRowNum > isSecondRowNum) {
          shouldRowsSwitch = true;
          break;
        }
      } else {
        const isCurrency = firstRowContent.indexOf('$');

        if (isCurrency !== -1) {
          const firstCurrency = +firstRowContent.slice(1).split(',').join('');
          const secondCurrency = +secondRowContent.slice(1).split(',').join('');

          if (firstCurrency > secondCurrency) {
            shouldRowsSwitch = true;
            break;
          }
        } else {
          const firstRowLowered = firstRowContent.toLowerCase();
          const secondRowLowered = secondRowContent.toLowerCase();

          if (firstRowLowered > secondRowLowered) {
            shouldRowsSwitch = true;
            break;
          }
        }
      }
    }

    if (shouldRowsSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      isSwitching = true;
    }
  }
}

for (let i = 0; i < titles.length; i++) {
  titles[i].addEventListener('click', e => {
    sortTable(i);
  });
}

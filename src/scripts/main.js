'use strict';

document.querySelector('thead').addEventListener('click', (e) => {
  const tHead = e.currentTarget;
  const tBody = tHead.nextElementSibling;
  const columnIndex = [...tHead.querySelectorAll('th')].indexOf(e.target);

  const compare = (a, b) => {
    if (a.comparedText < b.comparedText) {
      return -1;
    }

    if (a.comparedText > b.comparedText) {
      return 1;
    }

    return 0;
  };

  [...tBody.querySelectorAll('tr')]
    .map((row) => {
      let innerText = row.querySelectorAll('td')[columnIndex].innerText;

      innerText = innerText.match(/^[$]/)
        ? parseFloat(innerText.replace(/[.$]/, '').replace(',', '.'))
        : innerText;

      return {
        row: row,
        comparedText: innerText,
      };
    })
    .sort(compare)
    .forEach((sortedRow) => {
      tBody.append(sortedRow.row);
    });
});

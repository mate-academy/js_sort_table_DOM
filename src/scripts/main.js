'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const rows = [ ...tbody.rows ];

thead.addEventListener('click', (e) => {
  const th = e.target.closest('th');

  if (!th || !thead.contains(th)) {
    return;
  }

  const type = conversationToNumber(
    rows[0].cells[th.cellIndex].innerHTML);

  const sortTable = (typeof (type) === 'string')
    ? rows.sort((row1, row2) =>
      row1.cells[th.cellIndex].innerHTML
        .localeCompare(row2.cells[th.cellIndex].innerHTML))
    : rows.sort((row1, row2) =>
      conversationToNumber(row1.cells[th.cellIndex].innerHTML)
        - conversationToNumber(row2.cells[th.cellIndex].innerHTML));

  tbody.append(...sortTable);
});

function conversationToNumber(value) {
  const result = value.split('')
    .filter(element => element !== ' ')
    .filter(element => !isNaN(Number(element)));

  if (result.length === 0) {
    return value;
  }

  return Number(result.join(''));
};

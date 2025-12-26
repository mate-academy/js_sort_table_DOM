'use strict';

// write code here
const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');

const theadList = thead.querySelectorAll('th');

thead.addEventListener('click', (e) => {
  let theadIndex = null;

  theadList.forEach((el, index) => {
    if (el === e.target) {
      theadIndex = index;

      return index;
    }
  });

  const rows = Array.from(tbody.querySelectorAll('tr'));
  const isNum = (v) => v !== '' && !Number.isNaN(parseFloat(v)) && isFinite(v);

  const val = (row, idx) => {
    const cell = row.children[idx];

    return cell ? cell.textContent.trim() : '';
  };

  rows.sort((a, b) => {
    const aVal = val(a, theadIndex);
    const bVal = val(b, theadIndex);

    if (isNum(convertSalary(aVal)) && isNum(convertSalary(bVal))) {
      return parseFloat(convertSalary(aVal)) - parseFloat(convertSalary(bVal));
    }

    return aVal.localeCompare(bVal);
  });

  rows.forEach((row) => tbody.appendChild(row));
  // rows.forEach((row) => console.log(row));
});

function convertSalary(salary) {
  return +salary.slice(1).replace(/,/g, '');
}

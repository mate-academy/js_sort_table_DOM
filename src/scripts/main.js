'use strict';

const th = document.querySelectorAll('th');
const tbody = document.querySelector('tbody');

for (const item of th) {
  item.addEventListener('click', function () {
    const index = Array.from(th).indexOf(item);
    const rowsArray = Array.from(tbody.querySelectorAll('tr'));

    rowsArray.sort((el1, el2) => {
      const cell1 = el1.children[index].textContent
        .trim()
        .replace(/[$,\s]/g, '');
      const cell2 = el2.children[index].textContent
        .trim()
        .replace(/[$,\s]/g, '');
      const num1 = parseFloat(cell1);
      const num2 = parseFloat(cell2);

      if (!Number.isNaN(num1) && !Number.isNaN(num2)) {
        return num1 - num2;
      } else if (!Number.isNaN(num1)) {
        return -1;
      } else if (!Number.isNaN(num2)) {
        return 1;
      } else {
        return cell1.localeCompare(cell2);
      }
    });
    tbody.innerHTML = '';
    rowsArray.forEach((row) => tbody.append(row));
  });
}

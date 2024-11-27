'use strict';

const trList = Array.from(document.querySelectorAll('tr th')).slice(0, 4);
const tBody = document.querySelector('tbody');
const rows = Array.from(tBody.querySelectorAll('tr'));

function parseSalary(salaryString) {
  return Number(salaryString.replace(/[$,]/g, ''));
}

trList.forEach((headerTh, columnIndex) => {
  headerTh.addEventListener('click', () => {
    // eslint-disable-next-line
    console.log(columnIndex);

    const sortedRows = rows.sort((a, b) => {
      const aText = a.children[columnIndex].textContent.trim();
      const bText = b.children[columnIndex].textContent.trim();

      const aNum = parseSalary(aText);
      const bNum = parseSalary(bText);

      if (!isNaN(aNum) && !isNaN(bNum)) {
        return aNum - bNum;
      } else {
        return aText.localeCompare(bText);
      }
    });

    sortedRows.forEach((row) => tBody.appendChild(row));
  });
});

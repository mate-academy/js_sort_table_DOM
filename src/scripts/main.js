'use strict';

// write code here

const currentTable = document.querySelector('table');

const sortFunction = (table, column) => {
  const tBody = table.tBodies[0];
  const rowsOftBody = tBody.querySelectorAll('tr');

  const sortLetter = column === 0 || column === 1;
  const sortNum = column === 2 || column === 3;
  // name and position sort{
  const nameSort = [...rowsOftBody]
    .sort((a, b) => {
      const aTextContent = a.cells[column].textContent.trim();
      const bTextContent = b.cells[column].textContent.trim();

      if (sortLetter) {
        return aTextContent > bTextContent ? 1 : -1;
      }

      if (sortNum) {
        const aNum = parseFloat(aTextContent.replace(/[$,]/g, ''));
        const bNum = parseFloat(bTextContent.replace(/[$,]/g, ''));

        return aNum - bNum;
      }
    });
  // age and salary sort

  // remove all rows from tBody
  while (tBody.firstChild) {
    tBody.removeChild(tBody.firstChild);
  };

  // Add the sorted rows
  tBody.append(...nameSort);
};

// click on table headers
currentTable.addEventListener('click', (e) => {
  // naming headers
  const sortValue = ['Name', 'Position', 'Age', 'Salary'];
  const item = e.target.closest('th');
  let indexCellTarget;

  if (!item || !item.contains(item)) {
    return;
  }

  for (let i = 0; i < sortValue.length; i++) {
    if (item.innerText === sortValue[i]) {
      indexCellTarget = i;
    }
  }

  sortFunction(currentTable, indexCellTarget);
});

'use strict';

const thead = document.querySelector('thead');
const mainColumn = thead.querySelector('tr');
const nameRow = mainColumn.children[0];
const positionRow = mainColumn.children[1];
const ageRow = mainColumn.children[2];
const salaryRow = mainColumn.children[3];
const tBody = document.querySelector('tbody');
const tBodyRows = tBody.rows;

function convertToNumber(stringWithSymbols) {
  return parseFloat(stringWithSymbols.replace(/[$,]/g, ''));
}

const rowsArray = Array.from(tBodyRows);

salaryRow.addEventListener('click', e => {
  const sortedRows = rowsArray.sort((a, b) => {
    const salaryA = convertToNumber(a.cells[3].innerText);
    const salaryB = convertToNumber(b.cells[3].innerText);

    return salaryA - salaryB;
  });

  while (tBody.firstChild) {
    tBody.removeChild(tBody.firstChild);
  }

  sortedRows.forEach(row => {
    tBody.appendChild(row);
  });
}
);

ageRow.addEventListener('click', e => {
  const sortedRows = rowsArray.sort((a, b) => {
    const ageA = convertToNumber(a.cells[2].innerText);
    const ageB = convertToNumber(b.cells[2].innerText);

    return ageA - ageB;
  });

  while (tBody.firstChild) {
    tBody.removeChild(tBody.firstChild);
  }

  sortedRows.forEach(row => {
    tBody.appendChild(row);
  });
}
);

nameRow.addEventListener('click', e => {
  const sortedRows = rowsArray.sort((a, b) => {
    const nameA = a.cells[0].innerText.toLowerCase();
    const nameB = b.cells[0].innerText.toLowerCase();

    return nameA.localeCompare(nameB);
  });

  while (tBody.firstChild) {
    tBody.removeChild(tBody.firstChild);
  }

  sortedRows.forEach(row => {
    tBody.appendChild(row);
  });
}
);

positionRow.addEventListener('click', e => {
  const sortedRows = rowsArray.sort((a, b) => {
    const positionA = a.cells[1].innerText.toLowerCase();
    const positionB = b.cells[1].innerText.toLowerCase();

    return positionA.localeCompare(positionB);
  });

  while (tBody.firstChild) {
    tBody.removeChild(tBody.firstChild);
  }

  sortedRows.forEach(row => {
    tBody.appendChild(row);
  });
}
);

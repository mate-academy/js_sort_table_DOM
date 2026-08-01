'use strict';

function sortTable() {
  const table = document.querySelector('table');
  const headTh = table.querySelectorAll('th');

  headTh.forEach((target, index) => {
    target.addEventListener('click', () => sortType(index));
  });
}

const sortType = (columnIndex) => {
  const tbody = document.querySelector('tbody');
  const tr = Array.from(tbody.children);

  tr.sort((left, right) => {
    const leftValue = left.children[columnIndex].textContent.trim();
    const rightValue = right.children[columnIndex].textContent.trim();

    if (columnIndex === 2) {
      return parseInt(leftValue) - parseInt(rightValue);
    }

    if (columnIndex === 3) {
      const leftNumber = parseInt(leftValue.replace(/[^\d]/g, ''));
      const rightNumber = parseInt(rightValue.replace(/[^\d]/g, ''));

      return leftNumber - rightNumber;
    }

    return leftValue.localeCompare(rightValue);
  });

  tr.forEach((row) => tbody.appendChild(row));
};

sortTable();

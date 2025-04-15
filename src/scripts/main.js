'use strict';

// write code here
const headerParams = document.querySelectorAll('thead th');
const employees = document.querySelectorAll('tbody tr');
const table = document.querySelector('tbody');

headerParams.forEach((param) => {
  param.addEventListener('click', sorting);
});

function sorting(ev) {
  const targetIndex = [...headerParams].indexOf(ev.target);

  const ascSorted = [...employees].sort((a, b) => {
    const aValue = a.children[targetIndex].innerText;
    const bValue = b.children[targetIndex].innerText;

    if (isNaN(+aValue) && aValue[0] !== '$') {
      return aValue.localeCompare(bValue);
    } else {
      return (
        parseFloat(aValue.replace(/[^0-9.-]+/g, '')) -
        parseFloat(bValue.replace(/[^0-9.-]+/g, ''))
      );
    }
  });

  table.append(...ascSorted);
}

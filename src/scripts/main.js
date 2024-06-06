'use strict';

const makeSalary = (value) => {
  return value.slice(1).split(',').join('');
};

// write code here
document.addEventListener('click', (e) => {
  if (e.target.parentElement.parentElement.tagName !== 'THEAD') {
    return 0;
  }

  const elementIndex = e.target.cellIndex;

  const tbody = document.querySelector('tbody');

  const newList = [...tbody.children].sort((a, b) => {
    const aValue = a.children[elementIndex].textContent;
    const bValue = b.children[elementIndex].textContent;

    const isNumber = !isNaN(parseFloat(aValue)) && isFinite(aValue);
    const isSalary = aValue[0] === '$';

    if (isNumber) {
      return bValue - aValue;
    } else if (isSalary) {
      return makeSalary(bValue) - makeSalary(aValue);
    } else {
      return bValue.localeCompare(aValue);
    }
  });

  newList.forEach((el) => tbody.prepend(el));
});

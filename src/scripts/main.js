'use strict';

const table = document.querySelector('table');

table.tHead.addEventListener('click', e => {
  for (const body of table.tBodies) {
    sortList(body, e.target);
  }
});

function sortList(listProperty, target) {
  const index = target.cellIndex;
  const isSalary = target.innerText === 'Salary';

  const sortedList = [...listProperty.children].sort((a, b) => {
    if (isSalary) {
      return getAmountFromAttribute(a.children[index].innerText)
        - getAmountFromAttribute(b.children[index].innerText);
    }

    return a.children[index].innerText > b.children[index].innerText
      ? 1
      : a.children[index].innerText < b.children[index].innerText
        ? -1
        : 0;
  });

  sortedList.forEach(item => listProperty.append(item));
}

function getAmountFromAttribute(value) {
  return value.slice(1).replaceAll(',', '');
}

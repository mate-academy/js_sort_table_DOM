'use strict';

const sortProps = [...document.querySelector('tr').children]
  .map(item => item.innerText);
const tabBody = document.querySelector('tbody');
const tabRows = tabBody.querySelectorAll('tr');
const rowsArr = [...tabRows];

function SalaryToNumber(salary) {
  return parseInt(salary.substring(1).split(',').join(''));
}

const sort = (index, type) => {
  return rowsArr.sort((current, next) => {
    const item = current.children[index].innerText;
    const nextItem = next.children[index].innerText;

    switch (type) {
      case 'Salary' :
        return SalaryToNumber(item) - SalaryToNumber(nextItem);
      case 'Age' :
        return +item - +nextItem;
      default:
        return item.localeCompare(nextItem);
    }
  });
};

document.addEventListener('click', (e) => {
  if (!e.target.closest('th')) {
    return;
  }

  const type = e.target.closest('th').innerText;
  const index = sortProps.indexOf(type);

  const sorted = sort(index, type);

  tabBody.append(...sorted);
});

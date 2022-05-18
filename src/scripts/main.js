'use strict';

const tBody = document.querySelector('tbody');
const sortProps = [...document.querySelector('tr').children]
  .map(item => item.innerText);
const rows = [...tBody.rows];

const salaryNum = (salary) => {
  return Number(salary.slice(1)
    .split(',')
    .join(''));
};

const sort = (index, type) => {
  return rows.sort((current, next) => {
    const item = current.children[index].innerText;
    const nextItem = next.children[index].innerText;

    return type === 'Salary'
      ? salaryNum(item) - salaryNum(nextItem)
      : item.localeCompare(nextItem);
  });
};

document.addEventListener('click', (e) => {
  if (!e.target.closest('th')) {
    return;
  }

  const type = e.target.closest('th').innerText;
  const index = sortProps.indexOf(type);

  const sorted = sort(index, type);

  tBody.append(...sorted);
});

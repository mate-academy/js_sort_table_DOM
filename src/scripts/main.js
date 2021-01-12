'use strict';

const list = document.querySelector('tbody');
const table = document.querySelector('table');
const people = [...list.querySelectorAll('tr')];

function convert(inputSalary) {
  return +(inputSalary.slice(1, -1).split(',').join(''));
}

function sortTable(index) {
  const checkItem = people[0].children[index].innerText;

  return people.sort((a, b) => {
    const itemA = a.children[index].innerText;
    const itemB = b.children[index].innerText;

    if (parseFloat(checkItem.slice(1, -1))) {
      return convert(itemA) - convert(itemB);
    }

    if (Number(checkItem)) {
      return +itemA - +itemB;
    }

    return itemA.localeCompare(itemB);
  });
}

table.addEventListener('click', (e) => {
  const result = sortTable(e.target.cellIndex);

  list.append(...result);
});

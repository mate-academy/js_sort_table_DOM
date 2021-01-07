'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const itemsThead = { ...thead.children };
const itemsTbody = { ...tbody.children };

for (const item in itemsThead) {
  itemsThead[item].className = 'head';
}

const listHead = document.querySelector('.head');
const thHead = listHead.querySelectorAll('th');
const tempArr = [];
let indexHead = 0;

for (let i = 0; i < [...thHead].length; i++) {
  tempArr.push([...thHead][i].innerHTML);
}

listHead.addEventListener('click', (e) => {
  const item = e.target;

  indexHead = tempArr.lastIndexOf(item.innerHTML);

  for (const unit in itemsTbody) {
    itemsTbody[unit].className = (itemsTbody[unit]
      .children[+indexHead].innerHTML);
  }

  const column = tbody.querySelectorAll('tr');
  const columnArr = [...column];

  function sortColumn(list) {
    if (toNumber(list[0].className) === 0) {
      list.sort((a, b) => a.className.localeCompare(b.className));
    } else {
      list.sort((a, b) => toNumber(a.className) - toNumber(b.className));
    }

    tbody.append(...list);
  }
  sortColumn(columnArr);
});

function toNumber(string) {
  return Number(string.replace(/\D/g, ''));
};

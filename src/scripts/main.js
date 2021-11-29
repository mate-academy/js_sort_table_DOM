'use strict';

const table = document.querySelector('table');
const headers = table.querySelectorAll('thead th');
const rows = table.querySelectorAll('tbody tr');

const sortTatble = (el) => {
  const headerArr = [...headers];
  const rowArr = [...rows];
  const headerIndex = headerArr.indexOf(el.target);

  rowArr.sort((a, b) => {
    let tdA = a.children[headerIndex].innerHTML;
    let tdB = b.children[headerIndex].innerHTML;

    if (el.target.innerHTML === 'Salary') {
      tdA = +a.children[headerIndex].innerHTML
        .replace('$', '')
        .replace(',', '');

      tdB = +b.children[headerIndex].innerHTML
        .replace('$', '')
        .replace(',', '');
    }

    if (tdA > tdB) {
      return 1;
    } else if (tdA < tdB) {
      return -1;
    } else {
      return 0;
    }
  });

  rowArr.forEach((item) => table.appendChild(item));
};

for (const item of headers) {
  item.addEventListener('click', sortTatble);
}

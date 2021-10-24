'use strict';

// write code here
const table = document.querySelector('table');
const header = table.querySelectorAll('thead th');
const row = table.querySelectorAll('tbody tr');

const sortMe = (index) => {
  const headerArray = Array.from(header);
  const rowArray = Array.from(row);
  const headerIndex = headerArray.indexOf(index.target);

  rowArray.sort((a, b) => {
    let tdA = a.children[headerIndex].innerHTML;
    let tdB = b.children[headerIndex].innerHTML;

    if (index.target.innerHTML === 'Salary') {
      tdA = +a.children[headerIndex].innerHTML.substring(1).split(',').join('');
      tdB = +b.children[headerIndex].innerHTML.substring(1).split(',').join('');
    }

    if (tdA > tdB) {
      return 1;
    } else if (tdA < tdB) {
      return -1;
    } else {
      return 0;
    }
  });

  rowArray.forEach(item => table.appendChild(item));
};

for (let i = 0; i < header.length; i++) {
  header[i].addEventListener('click', sortMe);
};

'use strict';

// write code here
const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const tbodyRows = tbody.children;

thead.addEventListener('click', sortTable);

function sortTable(e) {
  const rowsArr = [...tbodyRows];
  const targetText = e.target.innerText;

  rowsArr.sort((a, b) => {
    switch (targetText) {
      case 'Name':
        return a.children[0].innerText.localeCompare(b.children[0].innerText);
      case 'Position':
        return a.children[1].innerText.localeCompare(b.children[1].innerText);
      case 'Age':
        return +a.children[2].innerText - +b.children[2].innerText;
      case 'Salary':
        return (
          salaryToNumber(a.children[3].innerText) -
          salaryToNumber(b.children[3].innerText)
        );
    }
  });

  tbody.innerHTML = '';

  rowsArr.forEach((element) => {
    tbody.append(element);
  });
}

function salaryToNumber(str) {
  return +str.slice(1).split(',').join('');
}

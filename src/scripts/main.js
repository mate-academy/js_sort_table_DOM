'use strict';

const tableHead = document.body.querySelector('thead');
const tableBody = document.body.querySelector('tbody');

document.addEventListener('click', (e) => {
  let colNum;
  const arrOfColumns = [ ...tableHead.lastElementChild.children ];

  for (let i = 0; i < arrOfColumns.length; i++) {
    if (e.target === arrOfColumns[i]) {
      colNum = i;
    }
  }

  let employeesHtml = '';

  const employeesArr = [ ...tableBody.children ];

  employeesArr.sort((pers1, pers2) => {
    const p1Arr = [ ...pers1.children ];
    const p2Arr = [ ...pers2.children ];

    const p1Salary = p1Arr[colNum].textContent.slice(1).split(',').join('');
    const p2Salary = p2Arr[colNum].textContent.slice(1).split(',').join('');

    if (!isNaN(parseFloat(p1Arr[colNum]))) {
      return Number(p1Arr[colNum].textContent)
        - Number(p2Arr[colNum].textContent);
    } else if (!isNaN(parseFloat(p1Salary))) {
      return Number(p1Salary)
        - Number(p2Salary);
    } else {
      return p1Arr[colNum].textContent.localeCompare(p2Arr[colNum].textContent);
    }
  });

  employeesArr.forEach(row => {
    employeesHtml += `
      <tr>
        ${row.innerHTML}
      </tr>
    `;
  });

  tableBody.innerHTML = employeesHtml;
});

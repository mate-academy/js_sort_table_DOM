'use strict';

function setSalaryToNumber(salary) {
  return parseInt(salary.replace('$', '').replaceAll(',', ''));
}

const table = document.querySelector('table');
const tableHeads = table.rows[0].children;
const tableDatas = [...table.tBodies[0].rows];

for (let i = 0; i < tableHeads.length; i++) {
  tableHeads[i].addEventListener('click', () => {
    tableDatas.sort((data1, data2) => {
      const data1Content = data1.children[i].textContent;
      const data2Content = data2.children[i].textContent;

      switch (tableHeads[i].textContent) {
        case 'Name':
        case 'Position':
          return data1Content.localeCompare(data2Content);
        case 'Age':
          return data1Content - data2Content;
        case 'Salary':
          return (
            setSalaryToNumber(data1Content) - setSalaryToNumber(data2Content)
          );
      }
    });
    table.tBodies[0].append(...tableDatas);
  });
}

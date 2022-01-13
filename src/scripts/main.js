'use strict';

const getEmployees = function(list) {
  const arrayList = [...list].map(item => {
    const itemEmployee = {
      Name: item.children[0].innerHTML,
      Position: item.children[1].innerHTML,
      Age: Number(item.children[2].innerHTML),
      Salary: Number(
        item.children[3].innerHTML.slice(1, 10).split(',').join('')),
    };

    return itemEmployee;
  });

  return arrayList;
};

const sortTable = function(table, column) {
  table.sort(function(a, b) {
    if (a[column] > b[column]) {
      return 1;
    }

    if (a[column] < b[column]) {
      return -1;
    }

    return 0;
  });

  return table;
};

const rebuildTable = (table) => {
  const tableBody = document.querySelector('tbody');

  for (let i = 0; i < listForSort.length; i++) {
    const row = tableBody.querySelector('tbody tr');

    row.remove();
  }

  for (let i = 0; i < listForSort.length; i++) {
    const newRow = document.createElement('tr');
    const newCell1 = document.createElement('td');

    newCell1.innerHTML = listForSort[i].Name;

    const newCell2 = document.createElement('td');

    newCell2.innerHTML = listForSort[i].Position;

    const newCell3 = document.createElement('td');

    newCell3.innerHTML = listForSort[i].Age;

    const newCell4 = document.createElement('td');

    newCell4.innerHTML = listForSort[i].Salary;

    newRow.append(newCell1);
    newRow.append(newCell2);
    newRow.append(newCell3);
    newRow.append(newCell4);

    tableBody.append(newRow);
  }
};

const rows = document.querySelectorAll('tbody tr');
const listForSort = getEmployees(rows);

document.addEventListener('click', (e) => {
  if (e.target.tagName !== 'TH') {
    return;
  }

  sortTable(listForSort, e.target.innerHTML);
  rebuildTable(listForSort);
});

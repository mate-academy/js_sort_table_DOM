'use strict';

const trList = document.querySelectorAll('tbody tr');
const thList = document.querySelector('thead tr');
const tbody = document.querySelector('tbody');

const cellsArray = [];

for (const cell of trList) {
  cellsArray.push({
    'Name': cell.children[0].textContent,
    'Position': cell.children[1].textContent,
    'Age': cell.children[2].textContent,
    'Salary': +cell.children[3].textContent.replace('$', '').replace(/,/gi, ''),
  });
}

thList.addEventListener('click', (clickEvent) => {
  const column = clickEvent.target.textContent;

  cellsArray.sort((a, b) => {
    if (typeof a[column] === 'number') {
      return a[column] - b[column];
    }

    return String(a[column]) < String(b[column]) ? -1 : 1;
  });

  tbody.innerHTML = '';

  cellsArray.forEach(element => {
    const newRow = document.createElement('tr');

    newRow.insertAdjacentHTML('afterbegin',
      `<td>${element.Name}</td>
       <td>${element.Position}</td>
       <td>${element.Age}</td>
       <td>${'$' + element.Salary.toLocaleString('en-US')}</td>
      `); // can be done dynamicaly with the loop
    tbody.append(newRow);
  });
});

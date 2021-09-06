'use strict';

const tbody = document.querySelector('tbody');
const sortButton = document.querySelectorAll('th');
const data = [];

for (let i = 0; i < tbody.rows.length; i++) {
  data.push({
    name: tbody.rows[i].cells[0].innerHTML,
    position: tbody.rows[i].cells[1].innerHTML,
    age: tbody.rows[i].cells[2].innerHTML,
    money: +tbody.rows[i].cells[3].innerHTML.replace(/\D/g, ''),
  });
}

for (let j = 0; j < sortButton.length; j++) {
  sortButton[j].addEventListener('click', createHTML);
}

function createHTML(e) {
  tbody.innerHTML = '';
  filterData(e.currentTarget.innerHTML);

  data.map((item) => {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${item.name}</td>
      <td>${item.position}</td>
      <td>${item.age}</td>
      <td>$${item.money.toLocaleString('en')}</td>
    `;
    tbody.append(row);
  });
}

function filterData(filterName) {
  if (filterName === 'Name') {
    data.sort((a, b) => a.name > b.name ? 1 : -1);
  }

  if (filterName === 'Position') {
    data.sort((a, b) => a.position > b.position ? 1 : -1);
  }

  if (filterName === 'Age') {
    data.sort((a, b) => a.age > b.age ? 1 : -1);
  }

  if (filterName === 'Salary') {
    data.sort((a, b) => a.money > b.money ? 1 : -1);
  }
}

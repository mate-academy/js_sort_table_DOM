/* eslint-disable operator-linebreak */
'use strict';

const tr = document.querySelectorAll('tbody tr');
const tbody = document.querySelector('tbody');
const th = document.querySelectorAll('th');

const data = [...tr].map((item) => {
  const arr = [...item.children];
  const obj = {
    name: arr[0].innerHTML,
    position: arr[1].innerHTML,
    age: arr[2].innerHTML,
    salary: arr[3].innerHTML,
  };

  return obj;
});

function renderData(sorter) {
  const sort = sorter;

  data.sort((a, b) => {
    if (sort === 'salary') {
      return (
        a[sort].replace('$', '').replace(',', '') -
        b[sort].replace('$', '').replace(',', '')
      );
    }

    if (sort === 'age') {
      return a[sort] - b[sort];
    }

    return a[sort].localeCompare(b[sort]);
  });

  tbody.innerHTML = `${data
    .map((item) => {
      return `<tr>
                <td>${item.name}</td>
                <td>${item.position}</td>
                <td>${item.age}</td>
                <td>${item.salary}</td>
            </tr>
    `;
    })
    .join('')}`;
}

[...th].forEach((item) => {
  const itemName = item.innerHTML.toLowerCase();

  item.addEventListener('click', () => renderData(itemName));
});

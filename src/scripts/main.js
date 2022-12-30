'use strict';

const thead = document.querySelector('thead');

function sort(nameSort) {
  const tbody = document.querySelector('tbody');
  const tr = tbody.querySelectorAll('tr');
  let n;

  switch (nameSort) {
    case 'Name':
      n = 0;
      break;
    case 'Position':
      n = 1;
      break;
    case 'Age':
      n = 2;
      break;
    case 'Salary':
      n = 3;
      break;
  }

  const people = [...tr].sort((a, b) => {
    if (n === 0 || n === 1) {
      return (a.querySelectorAll('td')[n].textContent).localeCompare(
        b.querySelectorAll('td')[n].textContent);
    }

    return (
      a.querySelectorAll('td')[n].textContent.replace('$', '').replace(',', ''))
    - b.querySelectorAll('td')[n].textContent.replace('$', '').replace(',', '');
  });

  const tbodyNew = document.createElement('tbody');

  tbodyNew.innerHTML = `
    ${people.map(human => `
    <tr>
    <td>${human.querySelectorAll('td')[0].innerText}</td>
    <td>${human.querySelectorAll('td')[1].innerText}</td>
    <td>${human.querySelectorAll('td')[2].innerText}</td>
    <td>${human.querySelectorAll('td')[3].innerText}</td>
    </tr>
    `).join('')}
    `;

  tbody.replaceWith(tbodyNew);
}

thead.addEventListener('click', (e) => {
  if (!e.target.tagName === 'TH') {
    return;
  } ;

  const nameSort = e.target.textContent;

  sort(nameSort);
}
);

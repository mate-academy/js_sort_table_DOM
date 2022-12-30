'use strict';

const thead = document.querySelector('thead');

function sort(nameSort) {
  const tbody = document.querySelector('tbody');
  const tr = tbody.querySelectorAll('tr');

  const people = [...tr].sort((a, b) => {
    const aTd = a.querySelectorAll('td');
    const bTd = b.querySelectorAll('td');

    switch (nameSort) {
      case 'Name':
        return (aTd[0].textContent).localeCompare(
          bTd[0].textContent);
      case 'Position':
        return (aTd[1].textContent).localeCompare(
          bTd[1].textContent);
      case 'Age':
        return (
          aTd[2].textContent.replace('$', '').replace(',', ''))
        - bTd[2].textContent.replace('$', '').replace(',', '');
      case 'Salary':
        return (
          aTd[3].textContent.replace('$', '').replace(',', ''))
        - bTd[3].textContent.replace('$', '').replace(',', '');
    }
  });

  const tbodyNew = document.createElement('tbody');

  tbodyNew.innerHTML = `
    ${people.map(human => {
    const humanTd = human.querySelectorAll('td');

    return `<tr>
    <td>${humanTd[0].innerText}</td>
    <td>${humanTd[1].innerText}</td>
    <td>${humanTd[2].innerText}</td>
    <td>${humanTd[3].innerText}</td>
    </tr>
    `;
  }).join('')}
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

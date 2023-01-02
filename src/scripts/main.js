'use strict';

const thead = document.querySelector('thead');

function formatNumberFromCurrency(number) {
  return number.textContent.replace('$', '').replace(',', '');
}

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
          aTd[2].textContent
        - bTd[2].textContent);
      case 'Salary':

        return formatNumberFromCurrency(aTd[3])
         - formatNumberFromCurrency(bTd[3]);
    }
  });

  const tbodyNew = document.createElement('tbody');

  tbodyNew.innerHTML = `
    ${people.map(person => {
    const personTd = person.querySelectorAll('td');

    return `<tr>
    <td>${personTd[0].innerText}</td>
    <td>${personTd[1].innerText}</td>
    <td>${personTd[2].innerText}</td>
    <td>${personTd[3].innerText}</td>
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

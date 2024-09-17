'use strict';

function MoneyStringToNumber(string) {
  return +string.slice(1).split(',').join('');
}

const tableHead = document.querySelector('thead');
const tableBody = document.querySelector('tbody');

tableHead.addEventListener('click', (e) => {
  const peopleDataRows = document.querySelectorAll('tbody > tr');

  if (e.target.tagName === 'TH') {
    switch (e.target.innerText) {
      case 'Name' :
        tableBody.append(...[...peopleDataRows].sort(
          (prevPerson, curPerson) => {
            return prevPerson.children[0].textContent.localeCompare(
              curPerson.children[0].textContent);
          }));
        break;
      case 'Position' :
        tableBody.append(...[...peopleDataRows].sort(
          (prevPerson, curPerson) => {
            return prevPerson.children[1].textContent.localeCompare(
              curPerson.children[1].textContent);
          }));
        break;
      case 'Age' :
        tableBody.append(...[...peopleDataRows].sort(
          (prevPerson, curPerson) => {
            return +prevPerson.children[2].textContent
            - +curPerson.children[2].textContent;
          }));
        break;
      case 'Salary' :
        tableBody.append(...[...peopleDataRows].sort(
          (prevPerson, curPerson) => {
            return MoneyStringToNumber(prevPerson.children[3].textContent)
            - MoneyStringToNumber(curPerson.children[3].textContent);
          }));
        break;
    }
  }
});

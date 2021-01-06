'use strict';

function MoneyStringToNumber(string) {
  return +string.slice(1).split(',').join('');
}

const peopleDataRows = document.querySelectorAll('tbody > tr');
const tableHead = document.querySelector('thead');
const tableBody = document.querySelector('tbody');
const peopleSortedByName = [...peopleDataRows].sort(
  (prevPerson, curPerson) => {
    return prevPerson.children[0].textContent.localeCompare(
      curPerson.children[0].textContent);
  });
const peopleSortedByPosition = [...peopleDataRows].sort(
  (prevPerson, curPerson) => {
    return prevPerson.children[1].textContent.localeCompare(
      curPerson.children[1].textContent);
  });
const peopleSortedByAge = [...peopleDataRows].sort(
  (prevPerson, curPerson) => {
    return +prevPerson.children[2].textContent
    - +curPerson.children[2].textContent;
  });
const peopleSortedBySalary = [...peopleDataRows].sort(
  (prevPerson, curPerson) => {
    return MoneyStringToNumber(prevPerson.children[3].textContent)
    - MoneyStringToNumber(curPerson.children[3].textContent);
  });

tableHead.addEventListener('click', (e) => {
  if (e.target.tagName === 'TH') {
    switch (e.target.innerText) {
      case 'Name' :
        tableBody.append(...peopleSortedByName);
        break;
      case 'Position' :
        tableBody.append(...peopleSortedByPosition);
        break;
      case 'Age' :
        tableBody.append(...peopleSortedByAge);
        break;
      case 'Salary' :
        tableBody.append(...peopleSortedBySalary);
        break;
    }
  }
});

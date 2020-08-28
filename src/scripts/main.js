'use strict';

const employee = Array.from(document.querySelectorAll('tbody tr'));
const tbody = document.querySelector('tbody');
const parameters = document.querySelector('thead').children[0];

for (const people of employee) {
  const addClass = people.querySelectorAll('td');

  for (let i = 0; i < addClass.length; i++) {
    addClass[i].className = parameters.children[i].innerText.toLowerCase();
  }
}

const numbersSorted = (arr, type) => {
  arr.sort((a, b) => {
    const first = +a.querySelector(`.${type}`).innerText.replace(/[$,]/g, '');
    const second = +b.querySelector(`.${type}`).innerText.replace(/[$,]/g, '');

    return first - second;
  });

  return arr;
};

const wordsSorted = (arr, type) => {
  arr.sort((a, b) => {
    const first = a.querySelector(`.${type}`).innerText;
    const second = b.querySelector(`.${type}`).innerText;

    return first.localeCompare(second);
  });

  return arr;
};

parameters.addEventListener('click', (event) => {
  const typeOfSorted = event.target.innerText.toLowerCase();
  const isNumber = +(employee[0].querySelector(`.${typeOfSorted}`).innerText
    .replace(/[$,]/g, ''));

  if (isNumber) {
    const sortedByNumber = numbersSorted(employee, typeOfSorted);

    tbody.append(...sortedByNumber);
  } else {
    const sortedByWords = wordsSorted(employee, typeOfSorted);

    tbody.append(...sortedByWords);
  }
  // второе решениие
  // switch (typeOfSorted) {
  //   case 'name':
  //     const sortedByName = wordsSorted(employee, 'name');
  //     tbody.append( ...sortedByName );
  //     break;
  //   case 'position':
  //     const sortedByPosition = wordsSorted(employee, 'position');
  //     tbody.append( ...sortedByPosition );
  //     break;
  //   case 'age':
  //     const sortedByAge = numbersSorted(employee, 'age');
  //     tbody.append( ...sortedByAge );
  //     break;
  //   case 'salary':
  //     const sortedBySalary = numbersSorted(employee, 'salary');
  //     tbody.append( ...sortedBySalary );
  //     break;
  // }
});

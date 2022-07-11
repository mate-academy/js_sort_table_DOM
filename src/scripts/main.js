'use strict';

const peopleList = [...document.querySelector('tbody').children];
const propertyNames = [...document.querySelector('tr').children].map(
  el => el.innerText.toLowerCase());
let propertyList = [];

peopleList.forEach((el, index) => {
  propertyList.push({
    name: el.children[0].textContent,
    position: el.children[1].textContent,
    age: +el.children[2].textContent,
    salary: +el.children[3].textContent.replace(/\D/g, ''),
    id: index,
  });
});

[...document.querySelector('tr').children].forEach((el, index) => {
  const key = propertyNames[index];

  el.addEventListener('click', () => {
    propertyList = propertyList.sort((a, b) => {
      if (typeof a[key] === 'number') {
        return a[key] - b[key];
      }

      if (a[key] > b[key]) {
        return 1;
      }

      if (a[key] < b[key]) {
        return -1;
      }

      return 0;
    });

    const newPeopleList = [];

    for (let i = 0; i < peopleList.length; i++) {
      newPeopleList.push(peopleList[propertyList[i].id]);
    }

    document.querySelector('tbody').append(...newPeopleList);
  });
});

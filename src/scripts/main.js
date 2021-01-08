'use strict';

const clickArea = document.querySelector('thead');
const dataTD = [...document.querySelectorAll('td')];
const dataArray = [];
const allTagsTD = dataTD.slice();

function createData() {
  const parseData = () => {
    return allTagsTD.splice(0, 1)[0].innerText;
  };

  while (allTagsTD.length > 0) {
    const person = {};

    person.name = parseData();
    person.position = parseData();
    person.age = +parseData();
    person.salary = +parseData().match(/\d/g).join('');
    dataArray.push(person);
  }
}

function rebuild() {
  const result = [];

  for (let i = 0; i < dataArray.length; i++) {
    for (const key in dataArray[i]) {
      if (key === 'salary') {
        result.push(`$${dataArray[i][key].toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`);
      } else {
        result.push(dataArray[i][key]);
      }
    }
  }

  for (let i = 0; i < dataTD.length; i++) {
    dataTD[i].innerText = result[i];
  }
}

function userSort(param = 'name') {
  createData();

  dataArray.sort((a, b) => {
    if (a[param] > b[param]) {
      return 1;
    } else if (a[param] < b[param]) {
      return -1;
    } else {
      return 0;
    }
  });

  rebuild();
}

clickArea.addEventListener('click', (e) => {
  const typeSort = e.target.innerText.toLowerCase();

  if (!typeSort) {
    return;
  }
  userSort(typeSort);
});

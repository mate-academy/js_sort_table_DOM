'use strict';

const thead = document.querySelector('thead').querySelector('tr');
let workerData;

thead.addEventListener('click', (e) => {
  workerData = [];

  // eslint-disable-next-line max-len
  const allWorkers = [...document.querySelector('tbody').querySelectorAll('tr')];
  // eslint-disable-next-line max-len
  const theadElements = [...document.querySelector('thead').querySelectorAll('th')];

  collect(allWorkers, theadElements);

  const sortedData = sort(workerData, e.target.innerText);

  changeData(allWorkers, theadElements, sortedData);
});

function collect(allWorkers, theadElements) {
  allWorkers.forEach((worker) => {
    const workerInfo = {};

    for (let j = 0; j < theadElements.length; j++) {
      workerInfo[theadElements[j].innerText] = worker.children[j].innerText;
    }

    workerData.push(workerInfo);
  });
}

function sort(list, sortLine) {
  switch (sortLine) {
    case 'Name':
      return sortString(list, sortLine);
    case 'Position':
      return sortString(list, sortLine);
    case 'Age':
      return sortNumbers(list, sortLine);
    case 'Salary':
      return sortSalary(list, sortLine);
  }
}

function sortSalary(list, sortLine) {
  return list
    .sort((personA, personB) => (
      fromDollars(personA[sortLine]) - fromDollars(personB[sortLine])
    ));
}

function sortNumbers(list, sortLine) {
  return list
    .sort((personA, personB) => (
      personA[sortLine] - personB[sortLine]
    ));
}

function sortString(list, sortLine) {
  return list
    .sort((personA, personB) => (
      personA[sortLine].localeCompare(personB[sortLine])
    ));
}

function fromDollars(salary) {
  return +salary.replace(/[$,]/g, '');
}

function changeData(allWorkers, theadElements, list) {
  allWorkers.forEach((worker, index) => {
    for (let j = 0; j < worker.children.length; j++) {
      worker.children[j].innerText = list[index][theadElements[j].innerText];
    }
  });
}

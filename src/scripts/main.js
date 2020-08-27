'use strict';

const tbody = document.querySelector('tbody');
const list = [...tbody.children];

// init functions
function sortString(orderOfColumn) {
  list.sort((a, b) => {
    const firstElem = a.children[orderOfColumn].innerText;
    const secondElem = b.children[orderOfColumn].innerText;

    return firstElem.localeCompare(secondElem);
  });

  list.forEach(tr => tbody.append(tr));
}

function sortNumbers(orderOfColumn) {
  list.sort((a, b) => {
    const firstElem = a.children[orderOfColumn].innerText;
    const secondElem = b.children[orderOfColumn].innerText;

    return firstElem - secondElem;
  });

  list.forEach(tr => tbody.append(tr));
}

function sortSalary(orderOfColumn) {
  function getNumber(str) {
    return str.slice(1).split(',').join('');
  }

  list.sort((a, b) => {
    const firstElem = getNumber(a.children[orderOfColumn].innerText);
    const secondElem = getNumber(b.children[orderOfColumn].innerText);

    return firstElem - secondElem;
  });

  list.forEach(tr => tbody.append(tr));
}

// set ivents
document.querySelectorAll('th')[0].onclick = () => {
  sortString(0);
};

document.querySelectorAll('th')[1].onclick = () => {
  sortString(1);
};

document.querySelectorAll('th')[2].onclick = () => {
  sortNumbers(2);
};

document.querySelectorAll('th')[3].onclick = () => {
  sortSalary(3);
};

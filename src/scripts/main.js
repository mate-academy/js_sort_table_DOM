'use strict';

const list = document.querySelector('tbody').children;
const thead = document.querySelector('thead');
const objList = [...list].map(item => ({
  Name: item.children[0].textContent,
  Position: item.children[1].textContent,
  Age: +item.children[2].textContent,
  Salary: +item.children[3].textContent.replace(/[^0-9]/g, ''),
}));

const sortTable = (array, data) => {
  array.sort((a, b) => {
    return isNaN(a[data])
      ? a[data].localeCompare(b[data])
      : a[data] - b[data];
  });
};

thead.addEventListener('click', (e) => {
  sortTable(objList, e.target.innerText);

  for (let i = 0; i < objList.length; i++) {
    list[i].children[0].innerText = objList[i].Name;
    list[i].children[1].innerText = objList[i].Position;
    list[i].children[2].innerText = objList[i].Age;

    list[i].children[3].textContent = `$${
      objList[i].Salary.toLocaleString('en-US')
    }`;
  }
});

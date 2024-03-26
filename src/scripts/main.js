'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');

const nodeList = [...tbody.children].map((i) => i.innerText.split('\t'));

thead.addEventListener('click', (e) => {
  const sortBy = e.target.innerText;

  if (sortBy === 'Name') {
    nodeList.sort((a, b) => a[0].localeCompare(b[0]));
  }

  if (sortBy === 'Position') {
    nodeList.sort((a, b) => a[1].localeCompare(b[1]));
  }

  if (sortBy === 'Age') {
    nodeList.sort((a, b) => a[2] - b[2]);
  }

  if (sortBy === 'Salary') {
    nodeList.sort(
      (a, b) =>
        a[3].slice(1).split(',').join('') - b[3].slice(1).split(',').join(''),
    );
  }

  for (let i = 0; i < nodeList.length; i++) {
    tbody.children[i].innerHTML = `
    <td>${nodeList[i][0]}</td>
    <td>${nodeList[i][1]}</td>
    <td>${nodeList[i][2]}</td>
    <td>${nodeList[i][3]}</td>
    `;
  }
});

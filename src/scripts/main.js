'use strict';

const tableBody = document.querySelector('tbody');

const rows = tableBody.querySelectorAll('tr');

const tableHead = document.querySelector('thead');

const th = tableHead.querySelectorAll('th');

const rowsArray = [...rows];

const thArray = [...th];

tableHead.addEventListener('click', e => {
  const index = thArray.findIndex(el => el.innerText === e.target.innerText);

  if (index === 3) {
    for (let i = 0; i < rowsArray.length; i++) {
      rowsArray[i].children[3].innerText = +rowsArray[i].children[3].innerText
        .slice(1).split(',').join('');
    }

    rowsArray.sort((a, b) =>
      a.children[3].innerText - b.children[3].innerText);

    for (let i = 0; i < rowsArray.length; i++) {
      rowsArray[i].children[3].innerText = '$' + rowsArray[i].children[3]
        .innerText.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
    }

    for (let i = 0; i < rowsArray.length; i++) {
      tableBody.append(rowsArray[i]);
    }
  } else {
    rowsArray.sort((a, b) =>
      a.children[index].innerText.localeCompare(b.children[index].innerText));

    for (let i = 0; i < rowsArray.length; i++) {
      tableBody.append(rowsArray[i]);
    }
  }
}
);

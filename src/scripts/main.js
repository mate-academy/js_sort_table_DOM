'use strict';
// write code here

const tbody = document.querySelector(`tbody`);
const tbodyData = document.querySelectorAll(`tbody tr`);
const header = document.querySelectorAll(`thead tr th`);

const data = [];
let position;

tbodyData.forEach(tr => {
  const personInfo = [];

  [...tr.children].forEach(th => {
    personInfo.push(th.innerHTML);
  });

  data.push(personInfo);
});

const sortHandler = (pos) => {
  const compareNumber = (a, b) => {
    if (a > b) {
      return 1;
    }

    if (a < b) {
      return -1;
    }

    if (a === b) {
      return 0;
    }
  };

  const compareString = (a, b) => {
    if (a.localeCompare(b) > 0) {
      return 1;
    }

    if (a.localeCompare(b) < 0) {
      return -1;
    }

    if (a.localeCompare(b) === 0) {
      return 0;
    }
  };

  const priceToNumber = (str) => Number(str.slice(1).replaceAll(',', ''));

  data.sort((a, b) => {
    const aa = a[pos];
    const bb = b[pos];

    if (pos <= 1) {
      return compareString(aa, bb);
    }

    if (pos === 2) {
      return compareNumber(Number(aa), Number(bb));
    }

    if (pos === 3) {
      return compareNumber(priceToNumber(aa), priceToNumber(bb));
    };
  });
};

const rerenderHandler = (dataBase) => {
  tbody.innerHTML = ``;

  dataBase.forEach(person => {
    const tr = document.createElement(`tr`);

    tr.innerHTML = `
      <td>${person[0]}</td>
      <td>${person[1]}</td>
      <td>${person[2]}</td>
      <td>${person[3]}</td>`;
    tbody.appendChild(tr);
  });
};

const clickHandler = () => {
  header.forEach(th => {
    th.addEventListener(`click`, function(e) {
      position = [...header].indexOf(e.target);
      sortHandler(position);
      rerenderHandler(data);
    });
  });
};

clickHandler();

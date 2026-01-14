'use strict';

// write code here

const title = document.querySelector('tr:has(th)');
const dates = document.querySelectorAll('tr:has(td)');
const arrOftitles = [...title.children];
const arrOfdates = [...dates];
const list = document.querySelector('tbody');

title.addEventListener('click', (e) => {
  let count = 1;

  if (e.target.matches('th')) {
    for (let i = 0; i < arrOftitles.length; i++) {
      if (e.target.isEqualNode(arrOftitles[i])) {
        break;
      }
      count++;
    }

    arrOfdates.sort((a, b) => {
      const valA = a.querySelector(`td:nth-child(${count})`).textContent;
      const valB = b.querySelector(`td:nth-child(${count})`).textContent;

      if (/\d/.test(valA)) {
        return (
          Number(valA.replace(/\D/g, '')) - Number(valB.replace(/\D/g, ''))
        );
      }

      return valA.localeCompare(valB);
    });
    arrOfdates.forEach((row) => list.appendChild(row));
  }
});

'use strict';

const table = document.querySelector('table');
const tBody = document.querySelector('tbody');
let arrayOfContent = [];

// for recording content Name or Position etc

table.addEventListener('click', (e) => {
  const tHead = document.querySelector('thead');
  const headers = [...tHead.querySelectorAll('th')];
  let index; // for find content of current element

  if (e.target.closest('th')) {
    index = headers.indexOf(e.target);
  }

  const content = [...tBody.querySelectorAll('tr')];

  for (const row of content) {
    const arrayOfTd = [...row.querySelectorAll('td')];

    let element = arrayOfTd[index].textContent;

    if (index === 3) {
      element = +element.replaceAll(/[$,]/g, '');
    }

    arrayOfContent.push(element);
  }

  function tryCompareAll(a, b) {
    return a > b ? 1 : -1;
  }

  arrayOfContent.sort(tryCompareAll);

  function replacingData(element, data) {
    for (let i = 0; i < element.length; i++) {
      const b = element[i];
      const n = [...b.querySelectorAll('td')];

      if (index === 3) {
        data[i] = '$' + data[i].toLocaleString('en-US');
      }
      // used twice, but i dont know, stupid money(

      n[index].textContent = data[i];
    }
  }

  replacingData(content, arrayOfContent);

  arrayOfContent = [];
});

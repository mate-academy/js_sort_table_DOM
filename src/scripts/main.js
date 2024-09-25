'use strict';

const tbody = [...document.getElementsByTagName('tr')];
const thead = tbody.shift();
const tfood = tbody.pop();

thead.addEventListener('click', (e) => {
  const sorted = sort([...tbody], e.target.closest('th'));

  tbody.forEach((column, index) => {
    column.replaceWith(sorted[index].cloneNode(true));
  });
});

tfood.addEventListener('click', (e) => {
  const sorted = sort([...tbody], e.target.closest('th'));

  tbody.forEach((column, index) => {
    column.replaceWith(sorted[index].cloneNode(true));
  });
});

function sort(table, selector) {
  const i = [...thead.children] // get array from all th elements
    .map((v) => v.textContent) // get text from th element
    .findIndex((v) => v === selector.textContent); // find index of th element

  return table.sort((a, b) => {
    // geting text content from a and b elements
    let cola = [...a.children].map((v) => v.textContent)[i];
    let colb = [...b.children].map((v) => v.textContent)[i];

    if (cola[0] === '$') {
      // parsing elements if it's sallary
      cola = parseInt(cola.replace(/[$,]/g, ''));
      colb = parseInt(colb.replace(/[$,]/g, ''));
    }

    return cola > colb;
  });
}

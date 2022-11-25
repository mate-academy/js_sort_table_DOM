'use strict';

const trHead = document.querySelector('table thead');

trHead.addEventListener('click', (e) => {
  if (e.target.nodeName === 'TH') {
    const trBody = document.querySelectorAll('table tbody tr');
    const sortVariant = e.target.textContent.toLowerCase();

    let tableData = fillArray(trBody);

    tableData = sortArray(tableData, sortVariant);

    document.querySelector('table tbody').remove();

    trHead.after(renderTable(tableData));
  }
});

function renderTable(arr) {
  const fragment = document.createDocumentFragment();
  const tbody = document.createElement('tbody');

  arr.forEach(person => {
    const tr = document.createElement('tr');

    for (const item in person) {
      const td = document.createElement('td');

      td.textContent = person[item];
      tr.append(td);
    }

    tbody.append(tr);
  });

  fragment.append(tbody);

  return fragment;
}

function fillArray(tableRows) {
  const arr = [];

  tableRows.forEach(tr => {
    arr.push({
      name: tr.children[0].textContent,
      position: tr.children[1].textContent,
      age: tr.children[2].textContent,
      salary: tr.children[3].textContent,
    });
  });

  return arr;
}

function sortArray(arr, sortString) {
  arr.sort((a, b) => {
    let strA = String(a[sortString]);
    let strB = String(b[sortString]);

    if (sortString === 'salary') {
      strA = Number(strA.slice(1).replace(/,/gi, '.'));
      strB = Number(strB.slice(1).replace(/,/gi, '.'));
    }

    switch (strA > strB) {
      case true:
        return 1;
      
      case false:
        return -1;
      
      default:
        return 0;
    }
  });

  return arr;
}

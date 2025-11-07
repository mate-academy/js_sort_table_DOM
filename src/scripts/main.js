'use strict';

const table = document.querySelector('table');
const tbody = table.querySelector('tbody');

table.addEventListener('click', (e) => {
  if (e.target.tagName !== 'TH') {
    return;
  }

  const collectionTh = table.querySelectorAll('thead tr th');
  const thArr = Array.from(collectionTh);
  const index = thArr.findIndex(
    (el) => el.textContent.trim() === e.target.textContent,
  );

  const collectionTr = table.querySelectorAll('tbody tr');
  const trArr = Array.from(collectionTr);
  const tRtDArr = trArr.map((tr) => {
    return Array.from(tr.querySelectorAll('td'));
  });

  tRtDArr.sort((a, b) => {
    const numA = a[index].textContent.replaceAll(/[^0-9]/g, '');
    const numB = b[index].textContent.replaceAll(/[^0-9]/g, '');

    if (numA !== '' && !Number.isNaN(+numA)) {
      return numA - numB;
    } else {
      return a[index].textContent.localeCompare(b[index].textContent);
    }
  });
  tbody.innerHTML = '';

  tRtDArr.forEach((trow) => {
    const row = document.createElement('tr');

    trow.forEach((td) => row.insertAdjacentElement('beforeend', td));
    tbody.insertAdjacentElement('beforeend', row);
  });
});

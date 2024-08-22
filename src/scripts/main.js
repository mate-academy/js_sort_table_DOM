'use strict';

const tr = document.querySelector('tr');

tr.addEventListener('click', (e) => {
  const link = e.target.closest('th');

  let index;

  tr.querySelectorAll('th').forEach((item, i) => {
    if (item === link) {
      index = i;
    }
  });

  if (!link) {
    return;
  }

  sortTable(index);

  if (link.classList.contains('asc')) {
    link.classList.remove('asc');
    link.classList.add('desc');
  } else if (link.classList.contains('desc')) {
    link.classList.remove('desc');
    link.classList.add('asc');
  } else {
    link.classList.add('asc');
  }
});

function sortTable(sortIndex) {
  const tbody = document.querySelector('tbody');
  const rows = Array.from(tbody.querySelectorAll('tr'));

  const sortOrder = tr
    .querySelectorAll('th')
    [sortIndex].classList.contains('asc');

  tr.querySelectorAll('th').forEach((item, index) => {
    if (index !== sortIndex) {
      item.classList.remove('asc', 'desc');
    }
  });

  rows.sort((a, b) => {
    const aText = a.querySelectorAll('td')[sortIndex].innerText;
    const bText = b.querySelectorAll('td')[sortIndex].innerText;

    const aNumber = parseFloat(aText.replace(/[$,]/g, ''));
    const bNumber = parseFloat(bText.replace(/[$,]/g, ''));

    if (
      aText.toString() === aText &&
      bText.toString() === bText &&
      isNaN(aNumber) &&
      isNaN(bNumber)
    ) {
      return sortOrder
        ? bText.localeCompare(aText)
        : aText.localeCompare(bText);
    } else {
      return sortOrder ? bNumber - aNumber : aNumber - bNumber;
    }
  });

  rows.forEach((row) => tbody.appendChild(row));
}

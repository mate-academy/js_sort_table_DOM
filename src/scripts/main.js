'use strict';

const table = document.querySelector('table');
const headers = table.querySelectorAll('thead th');
const tBody = table.querySelector('tbody');
const rows = Array.from(table.querySelectorAll('tbody tr'));

headers.forEach((header, index) => {
  header.addEventListener('click', function() {
    sortTable(index);
  });
})

function sortTable(index) {
  rows.sort((a, b) => {
    const aText = a.querySelectorAll('td')[index].innerText.trim();
    const bText = b.querySelectorAll('td')[index].innerText.trim();

    if (index === 2 || index === 3) {
      const aNum = numValue(aText);
      const bNum = numValue(bText);

      return aNum - bNum;
    }

    return aText.localeCompare(bText);
  });

  tBody.innerHTML = '';
  rows.forEach(row => tBody.appendChild(row));
}

function numValue(str) {
  let filteredStr = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] >= '0' || str[i] >= '9') {
      filteredStr += str[i];
    }
  }

  console.log(filteredStr);
  return parseFloat(filteredStr);
}

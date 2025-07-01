'use strict';

const table = document.querySelector('table');
const thead = table.querySelector('thead');
const title = thead.querySelectorAll('tr>th');
const tbody = [...table.querySelectorAll('tbody>tr')];
const tbodyOld = table.querySelector('tbody');

title.forEach((element, index) => {
  element.addEventListener('click', (e) => {
    const link = e.target.closest('th');

    if (!link) {
      return;
    }

    const cleanNumber = (str) => Number(str.replace(/[^\d.-]+/g, ''));

    tbody.sort((a, b) => {
      const aText = a.cells[index].textContent;
      const bText = b.cells[index].textContent;
      const isValid = !isNaN(cleanNumber(bText));
      const isNumber = cleanNumber(aText) && cleanNumber(bText);

      if (isValid && isNumber) {
        return cleanNumber(aText) - cleanNumber(bText);
      }

      return aText.localeCompare(bText);
    });

    tbodyOld.innerHTML = '';

    for (const key of tbody) {
      tbodyOld.appendChild(key);
    }
  });
});

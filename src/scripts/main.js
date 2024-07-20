'use strict';

const ths = document.querySelectorAll('thead th');
const tbody = document.querySelector('tbody');
const rows = Array.from(tbody.querySelectorAll('tr'));

ths.forEach((th) => {
  th.addEventListener('click', () => {
    const column = th.textContent;
    const index = Array.from(th.parentElement.children).indexOf(th);

    rows.sort((a, b) => {
      const aText = a.children[index].textContent;
      const bText = b.children[index].textContent;

      if (column === 'Name' || column === 'Position') {
        return aText.localeCompare(bText);
      } else if (column === 'Age' || column === 'Salary') {
        const aFormated = parseFloat(aText.replace(/[$,]/g, ''));
        const bFormated = parseFloat(bText.replace(/[$,]/g, ''));

        return aFormated - bFormated;
      }
    });

    tbody.innerHTML = '';
    rows.forEach((row) => tbody.appendChild(row));
  });
});

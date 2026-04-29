'use strict';

const table = document.querySelector('table');
const headers = table.querySelectorAll('th');
const tbody = table.querySelector('tbody');

let sortDirection = true;
let currentColumn = null;

headers.forEach((th, index) => {
  th.addEventListener('click', () => {
    if (currentColumn === index) {
      sortDirection = !sortDirection;
    } else {
      sortDirection = true;
      currentColumn = index;
    }

    const rows = Array.from(tbody.rows);

    rows.sort((a, b) => {
      const aText = a.cells[index].textContent.trim();
      const bText = b.cells[index].textContent.trim();

      // Очищуємо рядок від валют та ком, щоб перевірити чи це число
      const aClean = aText.replace(/[$,]/g, '');
      const bClean = bText.replace(/[$,]/g, '');

      // Перевіряємо чи є обидва значення числами (і не порожніми рядками)
      const isANumber = aClean !== '' && !isNaN(aClean);
      const isBNumber = bClean !== '' && !isNaN(bClean);

      if (isANumber && isBNumber) {
        const aNum = Number(aClean);
        const bNum = Number(bClean);

        return sortDirection ? aNum - bNum : bNum - aNum;
      }

      // Якщо це текст, використовуємо localeCompare
      return sortDirection
        ? aText.localeCompare(bText)
        : bText.localeCompare(aText);
    });

    tbody.append(...rows);
  });
});

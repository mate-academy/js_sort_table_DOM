'use strict';

const table = document.querySelector('table');
const headers = table.querySelectorAll('th');
const tbody = table.querySelector('tbody');

headers.forEach((th, index) => {
  th.addEventListener('click', () => {
    const rows = Array.from(tbody.querySelectorAll('tr'));

    const sorted = rows.sort((a, b) => {
      const aText = a.children[index].textContent.trim();
      const bText = b.children[index].textContent.trim();

      // Якщо це зарплата — прибираємо $, коми
      const aClean = aText.replace(/[$,]/g, '');
      const bClean = bText.replace(/[$,]/g, '');

      const aNum = parseFloat(aClean);
      const bNum = parseFloat(bClean);

      // Якщо обидва значення — числа → сортуємо як числа
      if (!isNaN(aNum) && !isNaN(bNum)) {
        return aNum - bNum;
      }

      // Інакше сортуємо як текст
      return aText.localeCompare(bText);
    });

    tbody.innerHTML = '';
    tbody.append(...sorted);
  });
});

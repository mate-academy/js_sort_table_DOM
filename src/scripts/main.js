'use strict';

const allThs = document.querySelectorAll('th');

allThs.forEach((th) => {
  th.addEventListener('click', (e) => {
    const index = Array.from(th.parentElement.children).indexOf(th);
    const tbody = document.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));

    rows.sort((a, b) => {
      const aText = a.children[index].textContent.trim();
      const bText = b.children[index].textContent.trim();

      if (index === 0 || index === 1) {
        return aText.localeCompare(bText);
      } else {
        const aValue = Number(aText.replace(/[^\d.]/g, ''));
        const bValue = Number(bText.replace(/[^\d.]/g, ''));

        return aValue - bValue;
      }
    });

    tbody.innerHTML = '';
    rows.forEach((row) => tbody.appendChild(row));
  });
});

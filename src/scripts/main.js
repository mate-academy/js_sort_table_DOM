'use strict';

const filter = document.querySelectorAll('thead tr th');

filter.forEach((th) => {
  th.addEventListener('click', (ev) => {
    const table = document.querySelector('table');
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));

    const targetIndex = ev.target.cellIndex;

    switch (ev.target.textContent.trim()) {
      case 'Name':
      case 'Position':
        rows.sort((a, b) => {
          const aText = a.children[targetIndex].textContent
            .trim()
            .toLowerCase();
          const bText = b.children[targetIndex].textContent
            .trim()
            .toLowerCase();

          return aText.localeCompare(bText);
        });
        break;

      case 'Age':
        rows.sort((a, b) => {
          const aNum = Number(a.children[targetIndex].textContent);
          const bNum = Number(b.children[targetIndex].textContent);

          return aNum - bNum;
        });
        break;

      case 'Salary':
        rows.sort((a, b) => {
          const aNum = Number(
            a.children[targetIndex].textContent.replace(/[^0-9.-]+/g, ''),
          );
          const bNum = Number(
            b.children[targetIndex].textContent.replace(/[^0-9.-]+/g, ''),
          );

          return aNum - bNum;
        });
        break;

      default:
        return;
    }

    tbody.innerHTML = '';
    tbody.append(...rows);
  });
});

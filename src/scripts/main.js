'use strict';

const theadTr = document.querySelectorAll('thead tr th');

theadTr.forEach((node) => {
  node.addEventListener('click', (e) => {
    const idx = Array.from(theadTr).indexOf(e.currentTarget);

    const rows = Array.from(document.querySelectorAll('tbody tr'));

    const tbody = document.querySelector('tbody');

    rows.sort((rowA, rowB) => {
      const a = rowA.children[idx].textContent.trim();
      const b = rowB.children[idx].textContent.trim();

      const aNum = Number(a);
      const bNum = Number(b);

      if (!Number.isNaN(aNum) && !Number.isNaN(bNum)) {
        return aNum - bNum;
      }

      return a.localeCompare(b);
    });

    rows.forEach((r) => tbody.appendChild(r));
  });
});

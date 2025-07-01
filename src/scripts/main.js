'use strict';

const titles = [...document.querySelector('thead').firstElementChild.children];
const tbody = document.querySelector('tbody');

for (let i = 0; i < titles.length; i++) {
  titles[i].addEventListener('click', () => {
    const rows = [...document.querySelector('tbody').children];

    rows.sort((row1, row2) => {
      const a = row1.children[i].textContent.trim();
      const b = row2.children[i].textContent.trim();

      const aNum = parseInt(a.replace(/[^0-9.-]+/g, ""));
      const bNum = parseInt(b.replace(/[^0-9.-]+/g, ""));

      if (!isNaN(aNum)) {
        return aNum - bNum;
      } else {
        return a.localeCompare(b);
      }
    });

    for (const row of rows) {
      tbody.append(row);
    }
  });
}

'use strict';

const headers = [...document.querySelectorAll('th')];
const tBody = document.querySelector('tbody');

headers.forEach((h) => {
  h.addEventListener('click', (e) => {
    const target = e.currentTarget;

    const index = headers.indexOf(target);
    const rows = [...tBody.rows];

    rows.sort((a, b) => {
      const td1 = a.children[index].textContent.trim();
      const td2 = b.children[index].textContent.trim();

      const n1 = parseFloat(td1.replace(/[^\d.-]/g, ''));
      const n2 = parseFloat(td2.replace(/[^\d.-]/g, ''));

      if (!isNaN(n1) && !isNaN(n2)) {
        return n1 - n2;
      }

      return td1.localeCompare(td2, undefined, { numeric: true });
    });

    rows.forEach((r) => {
      tBody.append(r);
    });
  });
});

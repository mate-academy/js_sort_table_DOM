'use strict';

const th = document.querySelectorAll('th');

th.forEach((element) => {
  element.addEventListener('click', (e) => {
    const index = e.target.cellIndex;
    const tr = Array.from(document.querySelectorAll('tbody tr'));
    const tbody = document.querySelector('tbody');

    tr.sort((a, b) => {
      const aItem = a.children[index].textContent.trim();
      const bItem = b.children[index].textContent.trim();

      const aNan = Number(aItem);
      const bNan = Number(bItem);

      if (!isNaN(aNan) && !isNaN(bNan)) {
        return aNan - bNan;
      } else {
        return aItem.localeCompare(bItem);
      }
    });

    tbody.innerHTML = '';

    tbody.append(...tr);
  });
});

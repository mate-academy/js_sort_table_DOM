'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');

thead.addEventListener('click', (ev) => {
  const th = ev.target.closest('th');

  if (!th) {
    return;
  }

  const ths = th.parentElement.children;
  const columnIndex = [...ths].indexOf(th);

  const rows = [...tbody.querySelectorAll('tr')];

  rows.sort((a, b) => {
    const aText = a.children[columnIndex].textContent.trim();
    const bText = b.children[columnIndex].textContent.trim();
    const aClean = aText.replace(/[$,]/g, '');
    const bClean = bText.replace(/[$,]/g, '');
    const aNum = parseFloat(aClean);
    const bNum = parseFloat(bClean);
    const bothNumbers = !isNaN(aNum) && !isNaN(bNum);

    if (bothNumbers) {
      return aNum - bNum;
    }

    return aText.localeCompare(bText);
  });

  rows.forEach((row) => tbody.appendChild(row));
});

'use strict';

// write code here
const tHead = document.querySelector('thead');
const tBody = document.querySelector('tbody');

tHead.addEventListener('click', (e) => {
  const th = e.target.closest('th');

  if (!th) {
    return;
  }

  const columnIndex = [...tHead.querySelectorAll('th')].indexOf(th);

  const rows = Array.from(tBody.querySelectorAll('tr'));

  rows.sort((a, b) => {
    const aText = a.children[columnIndex].textContent.trim();
    const bText = b.children[columnIndex].textContent.trim();

    if (aText.includes('$') && bText.includes('$')) {
      const aNewText = aText.slice(1).trim();
      const bNewText = bText.slice(1).trim();

      return parseFloat(aNewText) - parseFloat(bNewText);
    }

    if (isNaN(aText) && isNaN(bText)) {
      return aText.localeCompare(bText);
    } else {
      return parseFloat(aText) - parseFloat(bText);
    }
  });

  rows.forEach((r) => tBody.appendChild(r));
});

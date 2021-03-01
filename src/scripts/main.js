'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const rows = tbody.querySelectorAll('tr');

function convertToNumber(string) {
  return string.split('').filter(letter => (letter * 1) === +letter).join('');
}

const sorted = (e) => {
  const th = e.target.closest('th');
  const thIndex = th.cellIndex;
  const newRows = [...rows];

  if (!th || !thead.contains(th)) {
    return;
  }

  if (thIndex === 0 || thIndex === 1) {
    newRows.sort((currentString, nextString) => {
      const currentStringText = currentString.cells[thIndex].innerText;
      const nextStringText = nextString.cells[thIndex].innerText;

      return currentStringText.localeCompare(nextStringText);
    });
  };

  newRows.sort((currentItem, nextItem) => {
    const currentItemNumber
      = convertToNumber(currentItem.cells[thIndex].innerText);
    const nextItemNumber
      = convertToNumber(nextItem.cells[thIndex].innerText);

    return currentItemNumber - nextItemNumber;
  });

  rows.forEach(row => tbody.removeChild(row));
  newRows.forEach(rowed => tbody.appendChild(rowed));
};

thead.addEventListener('click', sorted);

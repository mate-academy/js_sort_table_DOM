'use strict';

function convertToNumber(string) {
  return +string.replace(/\D/g, '');
}

const thead = document.querySelector('thead');
const titles = thead.children[0].children;
const tbody = document.querySelector('tbody');

thead.addEventListener('click', e => {
  const title = e.target.closest('th');
  const titleIndex = [...titles].indexOf(title);
  const sortedTbody = document.createElement('tbody');

  const sortedEmployes = [...tbody.children].sort((prev, current) => {
    const prevText = prev.children[titleIndex].textContent;
    const currentText = current.children[titleIndex].textContent;

    if (convertToNumber(currentText) === 0) {
      return prevText.localeCompare(currentText);
    }

    return convertToNumber(prevText) - convertToNumber(currentText);
  });

  for (const employe of sortedEmployes) {
    sortedTbody.insertAdjacentHTML('beforeend', `
      <tr>
        ${employe.innerHTML}
      </tr>
    `);
  }
  tbody.innerHTML = sortedTbody.innerHTML;
});

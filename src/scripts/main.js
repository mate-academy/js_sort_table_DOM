const table = document.querySelector('table');
const tBody = table.querySelector('tbody');
const tr = [...tBody.querySelectorAll('tr')];
const th = [...table.querySelectorAll('th')];

th.forEach((header, index) => {
  header.addEventListener('click', () => {
    tr.sort((elem1, elem2) => {
      const firstElem = elem1.children[index].textContent.trim();
      const secondElem = elem2.children[index].textContent.trim();

      const firstNum = stringToNumber(firstElem);
      const secondNum = stringToNumber(secondElem);

      if (Number.isNaN(firstNum) || Number.isNaN(secondNum)) {
        return firstElem.localeCompare(secondElem);
      }

      return firstNum - secondNum;
    }).forEach((elem) => {
      tBody.appendChild(elem);
    });
  });
});

function stringToNumber(string) {
  if (typeof string !== 'string') {
    return string;
  }

  return +string.replace('$', '').replace(',', '');
}

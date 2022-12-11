'use strict';

const headTable = document.querySelector('thead');
const bodyTable = document.querySelector('tbody');

const headers = Array.from(headTable.firstElementChild.children);
const arrayOfRows = [...bodyTable.rows];

headTable.addEventListener('click', e => {
  const targetElement = e.target;
  const orderByColumnIndex = headers.indexOf(targetElement);
  const orderByColumnName = targetElement.innerText.toLowerCase();

  bodyTable.append(
    ...sortItems(arrayOfRows, orderByColumnName, orderByColumnIndex));
});

const sortItems = (items, orderBy, index) => {
  switch (orderBy) {
    case 'name':
    case 'position':
      return items.sort((a, b) =>
        sortString(a, b, index)
      );
    case 'age':
    case 'salary':
      return items.sort((a, b) =>
        sortNumber(a, b, index)
      );
  }
};

function sortString(prevRow, actualRow, index) {
  const prevText = prevRow.children[index].innerText;
  const actText = actualRow.children[index].innerText;

  return prevText.localeCompare(actText);
}

function sortNumber(prevRow, actualRow, index) {
  const prevNumber = +prevRow.children[index].innerText.replace(/\D/g, '');
  const actNumber = +actualRow.children[index].innerText.replace(/\D/g, '');

  return prevNumber - actNumber;
}

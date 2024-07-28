'use strict';

const getNumber = (tr) => +tr.textContent.replace(/\D/g, '');

const tbody = document.querySelector('tbody');
const thead = document.querySelector('thead');

thead.querySelectorAll('th').forEach((th, index) => {
  th.dataset.index = index;
});

thead.onclick = (e) => {
  const th = e.target.closest('th');

  if (!th) {
    return;
  }

  const trs = [...tbody.querySelectorAll('tr')];

  const index = th.dataset.index;

  const sortedTrs = trs.sort((trOne, trTwo) => {
    const tdsOne = trOne.querySelectorAll('td');
    const tdsTwo = trTwo.querySelectorAll('td');
    const valueOne = tdsOne[index].textContent;
    const valueTwo = tdsTwo[index].textContent;

    if (getNumber(tdsTwo[index])) {
      return getNumber(tdsOne[index]) - getNumber(tdsTwo[index]);
    }

    return valueOne.localeCompare(valueTwo);
  });

  sortedTrs.forEach((tr) => tbody.appendChild(tr));
};

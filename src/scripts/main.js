'use strict';

// write code here

const thead = document.querySelector('thead');

thead.addEventListener('click', (events) => {
  const th = events.target.closest('th');

  if (!th) {
    return;
  }

  const i = th.cellIndex;

  const tbody = document.querySelector('tbody');
  const tr = tbody.querySelectorAll('tr');

  const trArray = Array.from(tr);

  trArray.sort((a, b) => {
    const indexA = a.children[i];
    const indexB = b.children[i];

    const textA = indexA.textContent;
    const textB = indexB.textContent;

    const cleanA = textA.replace(/[^0-9.-]/g, '');
    const cleanB = textB.replace(/[^0-9.-]/g, '');

    const numA = Number(cleanA);
    const numB = Number(cleanB);

    if (cleanA !== '' && cleanB !== '') {
      return numA - numB;
    }

    return textA.localeCompare(textB);
  });

  tbody.innerHTML = '';

  trArray.forEach((el) => {
    tbody.append(el);
  });
});

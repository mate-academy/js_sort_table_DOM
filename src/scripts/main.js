'use strict';

const NodeListTr = document.body.querySelector('thead').querySelectorAll('tr');
const tbody = document.body.querySelector('tbody');
const tbodyCild = Array.from(tbody.children);

NodeListTr.forEach((item) => {
  item.addEventListener('click', (e) => {
    const arrayDidsort = tbodyCild.sort((a, b) => {
      return a.firstElementChild.textContent.localeCompare(
        b.firstElementChild.textContent,
      );
    });

    tbody.textContent = '';

    arrayDidsort.forEach((element) => {
      tbody.append(element);
    });
  });
});

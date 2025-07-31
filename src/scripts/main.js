'use strict';

const thList = Array.from(document.querySelectorAll('th'));
const tbody = document.querySelector('tbody');

thList.forEach((th) => {
  th.addEventListener('click', (e) => {
    const index = thList.indexOf(e.currentTarget);
    const rows = Array.from(document.querySelectorAll('tbody tr'));

    if (index === 2) {
      rows.sort(
        (a, b) =>
          Number(a.children[index].textContent) -
          Number(b.children[index].textContent),
      );
    } else if (index === 3) {
      rows.sort(
        (a, b) =>
          Number(a.children[index].textContent.replace(/[^0-9.-]+/g, '')) -
          Number(b.children[index].textContent.replace(/[^0-9.-]+/g, '')),
      );
    } else {
      rows.sort((a, b) =>
        a.children[index].textContent.localeCompare(
          b.children[index].textContent,
        ),
      );
    }

    rows.forEach((row) => tbody.appendChild(row));
  });
});

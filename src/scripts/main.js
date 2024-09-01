'use strict';

const th = document.querySelector('thead > tr');
const tBody = document.querySelector('tbody');
const tr = [...tBody.querySelectorAll('tr')];

th.addEventListener('click', (e) => {
  const title = e.target.innerText;

  tr.sort((a, b) => {
    switch (title) {
      case 'Name': {
        return a.children[0].innerText.localeCompare(b.children[0].innerText);
      }

      case 'Position': {
        return a.children[1].innerText.localeCompare(b.children[1].innerText);
      }

      case 'Age': {
        return (
          Number(a.children[2].innerText) - Number(b.children[2].innerText)
        );
      }

      case 'Salary': {
        return (
          Number(a.children[3].innerText.replace(/[$,]/g, '')) -
          Number(b.children[3].innerText.replace(/[$,]/g, ''))
        );
      }
    }
  });

  tr.forEach((el) => tBody.appendChild(el));
});

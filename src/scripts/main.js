'use strict';

// write code here

const thead = document.querySelector('thead');

thead.addEventListener('click', (e) => {
  const element = e.target.closest('th');

  if (!element) {
    return;
  }

  const text = element.textContent.trim().toLowerCase();
  const rows = document.querySelectorAll('tbody tr');

  const copy = Array.from(rows);

  switch (text) {
    case 'name':
      copy.sort((item1, item2) => {
        return item1.children[0].textContent.localeCompare(
          item2.children[0].textContent,
        );
      });
      break;

    case 'position':
      copy.sort((item1, item2) => {
        return item1.children[1].textContent.localeCompare(
          item2.children[1].textContent,
        );
      });
      break;

    case 'age':
      copy.sort((item1, item2) => {
        const age1 = parseInt(item1.children[2].textContent);
        const age2 = parseInt(item2.children[2].textContent);

        return age1 - age2;
      });
      break;

    case 'salary':
      copy.sort((item1, item2) => {
        const salary1 = parseInt(
          item1.children[3].textContent.replace(/[$,]/g, ''),
        );
        const salary2 = parseInt(
          item2.children[3].textContent.replace(/[$,]/g, ''),
        );

        return salary1 - salary2;
      });
      break;

    default:
      break;
  }

  const tbody = document.querySelector('tbody');

  tbody.innerHTML = '';

  copy.forEach((item) => {
    tbody.appendChild(item);
  });
});

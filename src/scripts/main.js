'use strict';

const tHead = document.querySelector('thead');
const tBody = document.querySelector('tbody');
const tBodyTr = document.querySelectorAll('tbody tr');

tHead.addEventListener('click', e => {
  const item = e.target;

  switch (item.innerText) {
    case ('Name'):
      const sortedName = [...tBodyTr].sort((a, b) =>
        a.children[0].innerText.localeCompare(b.children[0].innerText));

      tBody.innerHTML = '';
      sortedName.forEach(tr => tBody.appendChild(tr));
      break;

    case ('Position'):
      const sortedPos = [...tBodyTr].sort((a, b) =>
        a.children[1].innerText.localeCompare(b.children[1].innerText));

      tBody.innerHTML = '';
      sortedPos.forEach(tr => tBody.appendChild(tr));

      break;
    case ('Age'):

      const sortedAge = [...tBodyTr].sort((a, b) =>
        a.children[2].innerText.localeCompare(b.children[2].innerText));

      tBody.innerHTML = '';
      sortedAge.forEach(tr => tBody.appendChild(tr));
      break;
    case ('Salary'):

      const sortedSalary = [...tBodyTr].sort((a, b) =>
        a.children[3].innerHTML.replace(/[$,]/g, '')
        - b.children[3].innerHTML.replace(/[$,]/g, ''));

      tBody.innerHTML = '';
      sortedSalary.forEach(tr => tBody.appendChild(tr));
      break;
  }
});

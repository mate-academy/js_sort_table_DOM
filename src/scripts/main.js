'use strict';

const tabBody = document.querySelector('tbody');
const tabHeader = document.querySelector('thead');

const currentSorted = {
  'Name': false,
  'Position': false,
  'Age': false,
  'Salary': false,
};

const sorting = (el) => {
  const handleSorted = el.target.innerText;

  [...tabBody.children]
    .sort((element1, element2) => {
      let [el1, el2] = [element1, element2];

      if (currentSorted[handleSorted]) {
        [el1, el2] = [el2, el1];
      }

      switch (handleSorted) {
        case 'Name':
          return el1.children[0]
            .innerText.localeCompare(el2.children[0].innerText);
        case 'Position':
          return el1.children[1]
            .innerText.localeCompare(el2.children[1].innerText);
        case 'Age':
          return (el1.children[2].innerText - el2.children[2].innerText);
        default:

          return el1.children[3].innerText.replace(/[^0-9]/gi, '')
          - el2.children[3].innerText.replace(/[^0-9]/gi, '');
      }
    })
    .map(element => tabBody.append(element));

  currentSorted[handleSorted] = !currentSorted[handleSorted];
};

tabHeader.addEventListener('click', sorting);

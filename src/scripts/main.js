'use strict';

const head = document.querySelector('thead');
const body = document.querySelector('tbody');
const bodychildren = [...body.children];

function transformationNumber(element) {
  const array = element.children[3].textContent.slice(1).split(',');

  return +(array[0] + array[1]);
}

head.addEventListener('click', even => {
  if (even.target.textContent === 'Age') {
    bodychildren.sort((one, two) => {
      return +one.children[2].textContent - +two.children[2].textContent;
    });

    if (even.target.dataset.clicked === undefined) {
      for (const child of bodychildren) {
        body.append(child);
      }
      even.target.dataset.clicked = true;

      return;
    }

    if (even.target.dataset.clicked === 'true') {
      for (const child of bodychildren) {
        body.prepend(child);
      }
      even.target.removeAttribute('data-clicked');
    }
  }

  if (even.target.textContent === 'Position') {
    bodychildren.sort((a, b) => {
      return a.children[1].textContent.localeCompare(b.children[1].textContent);
    });

    if (even.target.dataset.clicked === undefined) {
      for (const child of bodychildren) {
        body.append(child);
      }
      even.target.dataset.clicked = true;

      return;
    }

    if (even.target.dataset.clicked === 'true') {
      for (const x of bodychildren) {
        body.prepend(x);
      }
      even.target.removeAttribute('data-clicked');
    }
  }

  if (even.target.textContent === 'Name') {
    bodychildren.sort((a, b) => {
      return a.children[0].textContent.localeCompare(b.children[0].textContent);
    });

    if (even.target.dataset.clicked === undefined) {
      for (const x of bodychildren) {
        body.append(x);
      }
      even.target.dataset.clicked = true;

      return;
    }

    if (even.target.dataset.clicked === 'true') {
      for (const x of bodychildren) {
        body.prepend(x);
      }
      even.target.removeAttribute('data-clicked');
    }
  }

  if (even.target.textContent === 'Salary') {
    bodychildren.sort((a, b) => {
      return transformationNumber(a) - transformationNumber(b);
    });

    if (even.target.dataset.clicked === undefined) {
      for (const x of bodychildren) {
        body.append(x);
      }
      even.target.dataset.clicked = true;

      return;
    }

    if (even.target.dataset.clicked === 'true') {
      for (const x of bodychildren) {
        body.prepend(x);
      }
      even.target.removeAttribute('data-clicked');
    }
  }
});

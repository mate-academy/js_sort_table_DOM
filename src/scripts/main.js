'use strict';

const title = document.querySelectorAll('th');

for (let i = 0; i < 3; i++) {
  title[i].onclick = () => {
    const tBodyChildren = Array.from(document.querySelector('tbody').children);

    tBodyChildren.sort((a, b) => {
      const num1 = a.children[i].innerText;
      const num2 = b.children[i].innerText;

      if (num1 > num2) {
        return 1;
      }

      if (num1 < num2) {
        return -1;
      }

      return 0;
    });
    document.querySelector('tbody').append(...tBodyChildren);
  };
}

title[3].onclick = () => {
  const tBodyChildren = Array.from(document.querySelector('tbody').children);

  tBodyChildren.sort((a, b) => {
    const num1 = +a.children[3].innerText.replace(/[^0-9.-]+/g, '');
    const num2 = +b.children[3].innerText.replace(/[^0-9.-]+/g, '');

    if (num1 > num2) {
      return 1;
    }

    if (num1 < num2) {
      return -1;
    }

    return 0;
  });

  document.querySelector('tbody').append(...tBodyChildren);
};

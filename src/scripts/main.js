'use strict';

const tHead = document.querySelector('thead tr');
const tBodyChield = Array.from(document.querySelector('tbody').children);
const tBody = document.querySelector('tbody');

tHead.addEventListener('click', (e) => {
  const click = e.target.closest('th');
  const func = (el) => el.innerHTML.localeCompare(click.innerHTML) === 0;
  const i = [...tHead.children].findIndex(func);

  const sortNumber = () => {
    tBodyChield.sort((a, b) => {
      return (
        parseInt(a.children[i].innerHTML) - parseInt(b.children[i].innerHTML)
      );
    });
  };

  const sortByString = () => {
    tBodyChield.sort((a, b) => {
      return a.children[i].innerHTML.localeCompare(b.children[i].innerHTML);
    });
  };

  const sortByCurrency = () => {
    tBodyChield.sort((a, b) => {
      const firstNum = a.children[i].innerHTML.replace('$', '');
      const secondNum = b.children[i].innerHTML.replace('$', '');

      if (!isNaN(parseFloat(firstNum) && !isNaN(parseFloat(secondNum)))) {
        return parseFloat(firstNum.trim()) - parseFloat(secondNum.trim());
      }
    });
  };

  if (!isNaN(parseInt(tBodyChield[1].children[i].innerHTML))) {
    sortNumber();
  }

  if (
    typeof tBodyChield[1].children[i].innerHTML === 'string' &&
    !tBodyChield[1].children[i].innerHTML.includes('$')
  ) {
    sortByString();
  }

  if (tBodyChield[1].children[i].innerHTML.includes('$')) {
    sortByCurrency();
  }

  tBodyChield.forEach((el) => {
    tBody.append(el);
  });
});

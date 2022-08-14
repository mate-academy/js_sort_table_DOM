'use strict';

// write code here
const tbody = document.querySelector('tbody');
const thead = document.querySelector('thead');
const control = {
  0: false,
  1: false,
  2: false,
  3: false,
};

thead.addEventListener('click', (elem) => {
  const index = [...elem.target.parentElement.children].indexOf(elem.target);

  control[index] = !control[index];

  let form = [];

  if (index <= 1) {
    form = [...tbody.children].sort((a, b) => {
      const aSort = control[index]
        ? a.children[index].innerText
        : b.children[index].innerText;
      const bSort = control[index]
        ? b.children[index].innerText
        : a.children[index].innerText;

      return aSort.localeCompare(bSort);
    });
  } else {
    form = [...tbody.children].sort((a, b) => {
      const aStatus = control[index] ? a : b;
      const bStatus = control[index] ? b : a;
      let aSort = index === 2 ? Number(aStatus.children[index].innerText) : 0;
      let bSort = index === 2 ? Number(bStatus.children[index].innerText) : 0;

      if (index === 3) {
        aSort = Number([...aStatus.children[index].innerText]
          .filter((item) => item !== '$' && item !== ',').join(''));

        bSort = Number([...bStatus.children[index].innerText]
          .filter((item) => item !== '$' && item !== ',').join(''));
      }

      return aSort - bSort;
    });
  }

  const mappedForm = form.map((item) => item.innerHTML);

  for (let i = 0; i < mappedForm.length; i++) {
    const res = mappedForm[i];

    tbody.children[i].innerHTML = res;
  }
});

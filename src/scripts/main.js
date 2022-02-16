'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const tr = tbody.querySelectorAll('tr');
const el = thead.querySelector('tr');

thead.addEventListener('click', (e) => {
  const item = e.target;

  if (item === el.children[0]) {
    const qwe = [...tr].sort((a, b) =>
    a.children[0].textContent.localeCompare(b.children[0].textContent));
    for (let i of qwe) {
      tbody.append(i);
    }
  }

  if (item === el.children[1]) {
    const qwe = [...tr].sort((a, b) =>
    a.children[1].textContent.localeCompare(b.children[1].textContent));
    for (let i of qwe) {
      tbody.append(i);
    }
  }

  if (item === el.children[2]) {
    const qwe = [...tr].sort((a, b) =>
    a.children[2].textContent - b.children[2].textContent);
    for (let i of qwe) {
      tbody.append(i);
    }
  }

  if (item === el.children[3]) {
    const qwe = [...tr].sort((a, b) =>
    parseFloat(a.children[3].textContent.replace(/^./,""))
    - parseFloat(b.children[3].textContent.replace(/^./,"")));
    for (let i of qwe) {
      tbody.append(i);
    }
  }
});

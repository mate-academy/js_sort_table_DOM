'use strict';

function salary(node) {
  return +node.cells[3].innerText.replace('$', '')
    .replace(',', '');
}

function sorting(action) {
  let switching = 'happened';

  while (switching === 'happened') {
    switching = 'not happened';

    const list = Array.from(document
      .querySelectorAll('tr')).slice(1, -1);

    for (let i = 0; i < list.length - 1; i++) {
      if (action(list[i]) > action(list[i + 1])) {
        list[i].parentNode.insertBefore(list[i + 1], list[i]);
        switching = 'happened';
      };
    }
  }
}

const table = document.querySelector('table');

for (let i = 0; i < table.rows[0].cells.length; i++) {
  table.rows[0].cells[i].onclick = function() {
    if (this.cellIndex === 3) {
      sorting(salary);
    } else {
      sorting((node) => {
        return node.cells[this.cellIndex].innerText;
      });
    };
  };
}

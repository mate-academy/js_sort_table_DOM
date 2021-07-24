'use strict';

function salary(node) {
  return +node.cells[3].innerText.replace('$', '')
    .replace(',', '');
}

function comparator(action, a, b, order) {
  if (order === 'asc') {
    return action(a) > action(b);
  } else {
    return action(a) < action(b);
  }
}

function sorting(action, flag) {
  let switching = 'happened';

  while (switching === 'happened') {
    switching = 'not happened';

    const list = Array.from(document
      .querySelectorAll('tr')).slice(1, -1);

    for (let i = 0; i < list.length - 1; i++) {
      if (comparator(action, list[i], list[i + 1], flag)) {
        list[i].parentNode.insertBefore(list[i + 1], list[i]);
        switching = 'happened';
      };
    }
  }

  console.log(flag);

  if (flag === 'asc') {
    flag = 'desc';
  } else {
    flag = 'asc';
  };
}

const table = document.querySelector('table');

for (let i = 0; i < table.rows[0].cells.length; i++) {
  table.rows[0].cells[i].onclick = function() {
    let flag = table.rows[0].cells[i].dataset.flag;
    console.log(this.dataset.flag);

    if (flag === 'asc') {
      flag = 'desc';
    } else {
      flag = 'asc';
    };

    if (this.cellIndex === 3) {
      sorting(salary, flag);
    } else {
      sorting((node) => {
        return node.cells[this.cellIndex].innerText;
      }, flag)
    };
  };
}

// я пытался импелементировать обратную сортировку, чтоб при повторном клике на
// уже отсортированной таблице по возрастанию сортировало по убыванию
// но у меня ничего не вышло, и когда я начал терять мотивацию решил запушить
// как есть, так как технически задание выполнено, а обратную сортировку
// доделать когда нибудь потом

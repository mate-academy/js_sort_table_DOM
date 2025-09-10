'use strict';

class TableSorter {
  /**
   * Table selector
   *
   * @type {string}
   */
  static TABLE_SEL = 'table';

  /**
   * Selector for table head elements
   *
   * @type {string}
   */
  static TABLE_TH_SEL = ':scope > thead > tr > th';

  /**
   * Selector for table tbody
   *
   * @type {string}
   */
  static TABLE_TBODY_SEL = ':scope > tbody';

  /**
   * Selector for table rows
   *
   * @type {string}
   */
  static TABLE_TR_SEL = ':scope > tr';

  /**
   * Sorting state of column
   *
   * @type {{ASC: number, DESC: number, NONE: number}}
   */
  static STATE = {
    ASC: 1,
    DESC: -1,
    NONE: 0,
  };

  /**
   * Table element in HTML
   * @type {HTMLElement}
   */
  _tableElement;

  /**
   * Sorter state
   * @type Object
   */
  _sorterState = {
    COLUMN_INDEX: -1,
    SORT: TableSorter.STATE.NONE,
  };

  /**
   * Custom comparator used for table
   * @type Array
   */
  _customComparators = [];

  /**
   * Constructor
   *
   * @param {string} tableDomSelector
   * @param {function[]} customComparators
   * @return void
   */
  constructor(tableDomSelector, customComparators = []) {
    if (typeof tableDomSelector !== 'string') {
      throw new Error('Table DOM selector must be a string');
    }

    // table
    this._tableElement = document.querySelector(tableDomSelector);

    if (!Array.isArray(customComparators)) {
      throw new Error('Custom comparators must be an array with comparators');
    }

    /**
     * Process custom comparators and bind to object
     */
    for (let i = 0; i < customComparators.length; i++) {
      this._customComparators[customComparators[i].index] =
        customComparators[i].comparator;
    }

    // init
    // get header elements
    /**
     * Node list of th
     * @type {NodeListOf<Element>}
     */
    const header = this._tableElement.querySelectorAll(
      TableSorter.TABLE_TH_SEL,
    );

    // add sorter handlers
    for (let colIndex = 0; colIndex < header.length; colIndex++) {
      header[colIndex].addEventListener('click', () => {
        this._sortColumn(colIndex);
      });
    }
  }

  /**
   * Simple default value comparator for sort
   * @param {string} a
   * @param {string} b
   * @param {number} sortType (-1 / 0 / 1)
   * @private
   */
  _defaultComparator(a, b, sortType) {
    // normalize strings
    const normA = (a ?? '').trim();
    const normB = (b ?? '').trim();

    /**
     * Empty strings are always lower
     */
    if (normA === '' && normB === '') {
      return 0;
    }

    if (normA === '') {
      return -1 * sortType;
    }

    if (normB === '') {
      return 1 * sortType;
    }

    // parse numbers - removes spaces and commas etc
    const numA = parseFloat(normA.replace(/\s|,/g, ''));
    const numB = parseFloat(normB.replace(/\s|,/g, ''));

    // check if both values are numeric to compare
    const bothNumeric =
      Number.isFinite(numA) &&
      Number.isFinite(numB) &&
      normA.match(/^-?\d+([.,]\d+)?$/) &&
      normB.match(/^-?\d+([.,]\d+)?$/);

    //compare as numberic
    if (bothNumeric) {
      return (numA - numB) * sortType;
    }

    // compare string case-insensetive
    return normA.localeCompare(
      normB,
      undefined,
      { sensitivity: 'base' },
    ) * sortType;
  }

  /**
   * Extract text value from cell
   * @param {HTMLTableRowElement} row
   * @param {number} colIndex
   */
  _extractCellValue(row, colIndex) {
    const cell = row.children[colIndex];

    return (cell?.textContent ?? '').trim();
  }

  /**
   * Sort table by column
   *
   * @param colIndex
   * @private
   */
  _sortColumn(colIndex) {
    /**if (this._sorterState.COLUMN_INDEX === colIndex) {
      // reverse sort asc-desc
      this._sorterState.SORT *= -1;
    } else {*/
      // init sort
      this._sorterState.COLUMN_INDEX = colIndex;
      this._sorterState.SORT = TableSorter.STATE.ASC;
    /**}*/

    // prepare header row
    this._tableElement
      .querySelectorAll(TableSorter.TABLE_TH_SEL)
      .forEach((th, i) =>
        // eslint-disable-next-line
        th.classList.toggle('sorted', i === this._sorterState.COLUMN_INDEX),);

    /**
     * table body
     * @type {Element}
     */
    const container = this._tableElement.querySelector(
      TableSorter.TABLE_TBODY_SEL,
    );

    /**
     * table rows
     * @type {Element[]}
     */
    const items = Array.from(
      container.querySelectorAll(TableSorter.TABLE_TR_SEL),
    );

    // prepare custom sort function if any, otherway use default one
    const compareFunc =
      typeof this._customComparators[colIndex] === 'function'
        ? this._customComparators[colIndex]
        : this._defaultComparator;

    // perform sort
    items
      .sort((rowA, rowB) => {
        const valueA = this._extractCellValue(rowA, colIndex);
        const valueB = this._extractCellValue(rowB, colIndex);

        return compareFunc(valueA, valueB, this._sorterState.SORT);
      })
      .forEach(
        // RE-APPEND == MOVE
        (el) => container.appendChild(el),
      );
  }
}

// prepare custom sorter for money column
const ourComparators = [
  {
    index: 3,
    comparator: function (a, b, sortType) {
      return (
        (parseFloat(a.replace(/[^0-9.,]/g, '')) -
          parseFloat(b.replace(/[^0-9.,]/g, ''))) *
        sortType
      );
    },
  },
];

// Ensure instantiation occurs after the table exists
document.addEventListener('DOMContentLoaded', function() {
  // eslint-disable-next-line no-unused-vars
  const tableSorter = new TableSorter(TableSorter.TABLE_SEL, ourComparators);
});

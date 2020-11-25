'use strict';

Cypress.Commands.add('isSorted', (columnName, clolumnNumber) => {
  cy.contains(columnName).click();

  cy.get(`tr:nth-child(n) td:nth-child(${clolumnNumber})`).then(($fcolumn) => {
    const columns = [...$fcolumn].map((column) => column.innerText);
    const sortedColumns = [...columns].sort((a, b) => a.localeCompare(b));
    let counter = 0;
    const copyOfColumns = [];
    const copyOfsortedColumns = [];

    for (let i = 0; i < columns.length; i++) {
      copyOfColumns.push(sortedColumns[i].replace('$', '').replace(',', ''));
      copyOfsortedColumns.push(columns[i].replace('$', '').replace(',', ''));
    }

    copyOfColumns.sort((a, b) => a - b);

    for (let i = 0; i < copyOfColumns.length; i++) {
      if (copyOfColumns[i] === copyOfsortedColumns[i]) {
        counter += 1;
      }
    }

    expect(counter).to.equal(columns.length);
  });
});

describe('Sorting table app', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should sort in ASC order when user clicks on `Name` header', () => {
    cy.isSorted('Name', 1);
  });

  it('should sort in ASC order when user clicks on `Position` header', () => {
    cy.isSorted('Position', 2);
  });

  it('should sort in ASC order when user clicks on `Age` header', () => {
    cy.isSorted('Age', 3);
  });

  it('should sort in ASC order when user clicks on `Salary` header', () => {
    cy.isSorted('Salary', 4);
  });
});

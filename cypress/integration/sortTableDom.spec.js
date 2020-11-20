'use strict';

describe('Sorting table app', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should sort in ASC order, by clicking on `Name` header', () => {
    cy.contains('Name').click();
    cy.get('tbody tr:nth-child(1) td:nth-child(1)').contains('Airi Satou');
    cy.get('tbody tr:nth-child(2) td:nth-child(1)').contains('Colleen Hurst');
    cy.get('tbody tr:nth-child(12) td:nth-child(1)').contains('Zorita Serrano');
  });

  it('should sort in ASC order, by clicking on `Position` header', () => {
    cy.contains('Position').click();
    cy.get('tbody tr:nth-child(1) td:nth-child(2)').contains('Accountant');

    cy.get('tbody tr:nth-child(2) td:nth-child(2)')
      .contains('Data Coordinator');

    cy.get('tbody tr:nth-child(12) td:nth-child(2)')
      .contains('Technical Author');
  });

  it('should sort in ASC order, by clicking on `Age` header', () => {
    cy.contains('Age').click();
    cy.get('tbody tr:nth-child(1) td:nth-child(3)').contains('20');
    cy.get('tbody tr:nth-child(2) td:nth-child(3)').contains('27');
    cy.get('tbody tr:nth-child(12) td:nth-child(3)').contains('66');
  });

  it('should sort in ASC order, by clicking on `Salary` header', () => {
    cy.contains('Salary').click();
    cy.get('tbody tr:nth-child(1) td:nth-child(4)').contains('$98,540');
    cy.get('tbody tr:nth-child(2) td:nth-child(4)').contains('$115,000');
    cy.get('tbody tr:nth-child(12) td:nth-child(4)').contains('$452,500');
  });
});

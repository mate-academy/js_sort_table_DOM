/* eslint-disable strict */
/* eslint-disable max-len */
describe(('Tests for sorted table.'), () => {
  before(() => {
    cy.visit('/');
  });

  it('Sort by Name.', () => {
    cy.get('thead > tr > :nth-child(1)').click();
    cy.get('tbody > :nth-child(1) > :nth-child(1)').contains('Airi Satou');
    cy.get('tbody > :nth-child(2) > :nth-child(1)').contains('Colleen Hurst');
    cy.get('tbody > :nth-child(12) > :nth-child(1)').contains('Zorita Serrano');

  });

  it('Sort by Position.', () => {
    cy.get('thead > tr > :nth-child(2)').click();
    cy.get('tbody > :nth-child(1) > :nth-child(2)').contains('Accountant');
    cy.get('tbody > :nth-child(2) > :nth-child(2)').contains('Data Coordinator');
    cy.get('tbody > :nth-child(12) > :nth-child(2)').contains('Technical Author');
  });

  it('Sort by Age.', () => {
    cy.get('thead > tr > :nth-child(3)').click();
    cy.get('tbody > :nth-child(1) > :nth-child(3)').contains('20');
    cy.get('tbody > :nth-child(2) > :nth-child(3)').contains('27');
    cy.get('tbody > :nth-child(12) > :nth-child(3)').contains('66');
  });

  it('Sort by Salary.', () => {
    cy.get('thead > tr > :nth-child(4)').click();
    cy.get('tbody > :nth-child(1) > :nth-child(4)').contains('$98,540');
    cy.get('tbody > :nth-child(2) > :nth-child(4)').contains('$115,000');
    cy.get('tbody > :nth-child(12) > :nth-child(4)').contains('$452,500');
  });
});

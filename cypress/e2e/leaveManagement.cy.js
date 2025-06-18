/// <reference types="cypress" />
import { randomInputs } from '../support/faker'
const randomNumber = Math.floor(100000 + Math.random() * 900000)

beforeEach(() => {
    cy.baseurl()
    cy.login()
})
/*it('Verify that leave application page is loaded', () => {
    cy.get('.oxd-main-menu-item', {timeout: 10000}).contains('Leave')
      .click()
    cy.url().should('include', '/leave/viewLeaveList')
})*/
it('Apply for leave', () => {
    cy.get('.oxd-main-menu-item', {timeout: 10000}).contains('Leave')
      .click()
    cy.get('.oxd-topbar-body').contains('Apply')
      .click()
      cy.url().should('include', '/leave/applyLeave')
 
})
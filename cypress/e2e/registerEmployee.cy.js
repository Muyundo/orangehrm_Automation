///  <reference types= "cypress" />
import { randomInputs } from '../support/faker'

beforeEach(() =>{
    cy.baseurl()
    cy.login()
})

it('Register employee', () =>{
    cy.get('.oxd-navbar-nav').contains('PIM')
      .click()
    cy.get ('.oxd-button').contains('Add')
      .click()

    cy.get('input[name = "firstName"]', {timeout: 10000}).type(randomInputs.fname)
    cy.get('input[name = "middleName"]').type(randomInputs.mname)
    cy.get('input[name = "lastName"]').type(randomInputs.lname)
    cy.get('.oxd-button--secondary').contains('Save')
      .click()
      cy.get('.oxd-toast-container.oxd-toast-container--bottom').should('contain', 'Successfully Saved');



      })
      



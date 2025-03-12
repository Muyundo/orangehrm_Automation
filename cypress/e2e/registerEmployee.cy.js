///  < reference types = "cypress" />
beforeEach(() =>{
    cy.baseurl()
    cy.login()
})

it('Register employee', () =>{
    cy.get('.oxd-navbar-nav').contains('PIM')
      .click()
    cy.get ('.oxd-button').contains('Add')
      .click()

    cy.get('input[name = "firstName"]', {timeout: 10000}).type('Gorge')
    cy.get('input[name = "middleName"]').type('Gorge')
    cy.get('input[name = "lastName"]').type('Gorge')
    cy.get('.oxd-button--secondary').contains('Save')
      .click()


      })
      



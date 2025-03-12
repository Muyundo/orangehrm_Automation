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

})
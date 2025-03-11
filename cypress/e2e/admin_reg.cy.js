/// <reference types = "cypress"/>
beforeEach(() =>{
    cy.baseurl()
    cy.login()
    
    })
    it('Login page', () => {
        cy.get('.oxd-navbar-nav').contains('Admin').click()
    })
     
    
    
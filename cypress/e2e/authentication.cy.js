/// <reference types = "cypress"/>
beforeEach(() =>{
cy.baseurl()

})

//describe('login', ()=>{
it('Login page', () => {
    cy.url().should('include', '/auth/login')
})

it('login using Incorrect username and correct password', () =>{
    cy.get('input[name = "username"]').type('Incorrect username')
    cy.get('input[name = password]').type('admin123')
    cy.get('.oxd-button').contains('Login').click()
    cy.get('.oxd-alert').contains('Invalid credentials', {timeout: 10000}).should('be.visible')

})

    it('login using correct username and incorrect password', () =>{
        cy.get('input[name = "username"]').type('Admin')
        cy.get('input[name = password]').type('incorrect password')
        cy.get('.oxd-button').contains('Login').click()
        cy.get('.oxd-alert').contains('Invalid credentials', {timeout: 10000}).should('be.visible')


    })
    
    it('login without username and password', () =>{
        cy.get('.oxd-button').contains('Login').click()
        cy.get('.oxd-form').contains('Required', {timeout: 10000}).should('be.visible')

    })
    
    it('login using correct username and correct password', () =>{
        cy.get('input[name = "username"]').type('Admin')
        cy.get('input[name = password]').type('admin123')
        cy.get('.oxd-button').contains('Login').click()
        cy.url().should('include', '/dashboard/index')

    })    




//})
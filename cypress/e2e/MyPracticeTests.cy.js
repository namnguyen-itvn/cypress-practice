/// <reference types="Cypress" />

describe.only('First automation test suite', () =>{
    it.only('verify the title of orange hrm live Login Page', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('eq','OrangeHRM')
    })

    it.only('verify the title-negative of orange hrm live Login Page', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('eq','OrangeHRM123')
    })

    it.only('CSSLocator - Login to OrangeHRM system', ()=>{
        cy.visit('http://automationpractice.com/index.php')
        cy.get('#search_query_top').type('T-Shirts')
        cy.get("name['submit_search']").click()
        cy.get(".lighter").should("have.text","T-Shirts")
    })
})
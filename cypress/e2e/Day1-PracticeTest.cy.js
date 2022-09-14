// <reference types="Cypress" />

describe.only('First automation test suite', () =>{
    
    it.only('CSSLocator - Login to OrangeHRM system', ()=>{
        cy.visit('http://automationpractice.com/index.php')
        cy.get('#search_query_top').type('T-Shirts')
        cy.get("name['submit_search']").click()
        cy.get(".lighter").should("have.text","T-Shirts")
    })
})
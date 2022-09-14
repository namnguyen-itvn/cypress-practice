/// <reference types="Cypress" />
require('cypress-xpath')

//Declare Element Locator
const SAUCEURL = 'https://www.saucedemo.com/'
const USERNAME = '#user-name'
const PASSWORD = '#password'
const LOGINBUTTON = 'login-button'

describe.only("Sauce Test Practice",()=>{
    it.only("Verify SauceDemo Login page title", ()=>{
        cy.visit(SAUCEURL)
        cy.title().should('eq','Swag Labs') // Using Common Assertion
        //assert.equal("Swag Labs",cy.title(),"The title are not match, it should be Swag Labs") //using TDD Assertion - Chai Assertion TDD - https://www.chaijs.com/api/assert/#method_equal
    })

    it("Verify SauceDemo Login page - User should login success", ()=>{
        cy.visit(SAUCEURL)
        cy.get(USERNAME).type('standard_user')
        cy.get(PASSWORD).get('secret_sauce')
        cy.get(LOGINBUTTON).click()
    })
})
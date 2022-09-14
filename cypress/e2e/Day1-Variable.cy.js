/// <reference types="Cypress" />

describe('parent', () => {
    beforeEach(() => {
      cy.wrap('Nguyen').as('a')
    })
  
    context('child', () => {
      beforeEach(() => {
        cy.wrap('Hong').as('b')
      })
  
      describe('grandchild', () => {
        beforeEach(() => {
          cy.wrap('Vinh').as('c')
        })
  
        it('can access all aliases as properties', function () {
          expect(this.a).to.eq('Nguyen') // true
          expect(this.b).to.eq('Hong') // true
          expect(this.c).to.eq('Vinh') // true
        })
      })
    })
  })
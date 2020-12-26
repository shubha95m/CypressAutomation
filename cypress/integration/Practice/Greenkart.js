/// <reference types="Cypress" />
import GreenkartPage from '../../support/PageObjects/GreenkartPage'

describe('greenkart site' , function(){

    before(function() {
        // runs once before all tests in the block
        cy.fixture('example').then(function(data)
        {
            this.data=data
        })
      })

    it('First test case', function(){
        const gp = new GreenkartPage()

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        gp.getSearchBox().type('ca')
        cy.wait(2)
        gp.getAllProducts().should('have.length', 5)
        gp.getAllVisibleProducts().should('have.length', 4)

        cy.selectProduct(this.data.singleProduct)
        this.data.productList.forEach(function(element){
            cy.selectProduct(element)
        });
})
})
/// <reference types="Cypress" />

describe('AS login', function(){

    beforeEach(function(){
        cy.fixture('AS').then(function(data){
            this.data = data
        })
    })

    it('login method', function(){

        cy.loginToAs(this.data.user, this.data.password)
    })

    it('create save search', function(){

        cy.createSSWithoutAlert(this.data.SSWithoutAlert)
    })

    it('validate SS from search library', function(){
        cy.get('.dropdown-button > :nth-child(1) > .match-media').click()
        cy.get('.search > input').type(this.data.SSWithoutAlert)
        cy.get('.alert-edit > i > svg > path').should('have.length', 1)
        cy.get('.alert-edit > i > svg > path').click()
        cy.get('.save-search-manage-item').click()
        cy.get('.red').should('be.visible', true)
        cy.get('.red').click()
        cy.get('#dialog-ok').should('be.visible', true)
        cy.get('#dialog-ok').click()
        cy.get('.red').should('not.be.visible', true)
    })
})
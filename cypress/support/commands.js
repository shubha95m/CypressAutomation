// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add("selectProduct", (productName) => {
    cy.get('.product').each(($el, index, $list) => {
        const textvalue = $el.find('.product-name').text()
        if ($el.text().includes(productName)){
            //$el.find('.product-action > button').click()
            cy.get('.product').find('[type="button"]').eq(index).click()
        }
    })
})

Cypress.Commands.add("selectProduct2", (productName) => { 
    cy.get('h4.card-title').each(($el, index, $list) => {
        if($el.text().includes(productName))
        {
            cy.get('button.btn.btn-info').eq(index).click()
        }
        
        })


})

Cypress.Commands.add("loginToAs", (userid, password) => {
    cy.visit('https://rc.alpha-sense.com/')
    cy.get('#username').type(userid)
    cy.get('#next-step').click()
    cy.get('#password').type(password)
    cy.get('#submit').click()
    cy.get('#logo').should('be.visible', true)
})

Cypress.Commands.add("createSSWithoutAlert", (SSName) => {
    cy.get('#saveSearch > .button').click()
    cy.get('.secondary').should('be.visible', true)
    cy.get('#create-alert-input-name').type(SSName)
    cy.get('.modal-footer > .primary').click()
    if(cy.get('#dialog-ok').should('be.visible', true)) {
            cy.get('#dialog-ok').click()
        }
    cy.get('.secondary').should('be.visible', false)
})
class GreenkartPage{

    getSearchBox(){
        return cy.get('.search-keyword')
    }

    getAllProducts(){
        return cy.get('.product')
    }

    getAllVisibleProducts(){
        return cy.get('.product:visible')
    }
}
export default GreenkartPage

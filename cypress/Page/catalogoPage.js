export default class CatalogoPage {
  
    visitPageCatalogo() {
      cy.get('#react-burger-menu-btn').click(); 
      cy.get('[data-test="inventory-sidebar-link"]').click();
    }

    validateCatalogoCards() {
        cy.get(this.class="inventory_item").find(this.cardSelector).should('have.length.gt', 0);
      }

    validateAmountOfCardImages(amount){
        cy.get('img.inventory_item_img').should('have.length',amount);
    }

    validateAmountOfCardsTitles(amount){
        cy.get('.inventory_item_name').should('have.length',amount);
    }

    validateAmountOfCardSubTitles(amount){
        cy.get('.inventory_item_desc').should('have.length',amount);
    }

}
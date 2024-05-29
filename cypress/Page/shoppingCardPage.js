export default class ShoppingCardPage {
     
      visitPageProducts() {
      cy.visit('https://www.saucedemo.com/inventory.html/producto');
    }

    addProductBikeLight() {
      cy.get('button[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    }

    addProductBlackpack(){
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    }

    addProductTShirt(){
      cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    }
  }
  
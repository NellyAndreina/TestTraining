export default class CheckoutPage {
  
    visitPageCheckout() {
      cy.visit('https://www.saucedemo.com/checkout-step-one.html'); 
    }
  
    addPersonalInformation(firstName, lastName, postalCode) {
      cy.get('#first-name').clear().type(firstName);
      cy.get('#last-name').clear().type(lastName);
      cy.get('[data-test="postalCode"]').clear().type(postalCode);
    }

    clickOnCheckout() {
      cy.get('[data-test="checkout"]').click();
    }
    
    goToShoppingCart(){
      cy.get('[data-test="shopping-cart-link"]').click();
    }
    
    clickOnCuntinueButton(){
      cy.get('[data-test="continue"]').click();
    }

    verifySuccesfulCheckout(){
      cy.get('[data-test="title"]').should('have.text','Checkout: Complete!');
    }

    clickOnFinishButton(){
      cy.get('[data-test="finish"]').click();
    }
    
  }
  
import CheckoutPage from "../Page/checkoutPage";
import ShoppingCardPage from "../Page/shoppingCardPage";
import CommonPage from "../Page/commonPage";

const personData = require('../fixtures/personaInfo.json');
const carPage = new ShoppingCardPage();
const checkOut = new CheckoutPage();
const commonPage = new CommonPage();

describe('Pruebas de checkout', () => {

  beforeEach(() => {
    commonPage.userLogin();
  });
  it('Realizar pedido exitosamente', () => {
    carPage.addProductBikeLight();
    checkOut.goToShoppingCart();
    checkOut.clickOnCheckout();
    checkOut.addPersonalInformation(personData.userName,personData.userLastName,personData.postalCode);
    checkOut.clickOnCuntinueButton();
    checkOut.clickOnFinishButton();
    checkOut.verifySuccesfulCheckout();
  });
});

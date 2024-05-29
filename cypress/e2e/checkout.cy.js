import CheckoutPage from "../Page/checkoutPage";
import ShoppingCardPage from "../Page/shoppingCardPage";
import { LoginRegister } from "../Page/loginPage";

const userData = require('../fixtures/user.json');
const personData = require('../fixtures/personaInfo.json');
const carPage = new ShoppingCardPage();
const login = new LoginRegister();
const checkOut = new CheckoutPage();

describe('Pruebas de checkout', () => {

  beforeEach(() => {
    login.visitPageLogin();
    login.getUsername(userData.userName) 
    login.getPassword(userData.password)
    login.submit()
  });
  it('Se realiza un pedido exitosamente', () => {
    carPage.addProductBikeLight();
    checkOut.goToShoppingCart();
    checkOut.clickOnCheckout();
    checkOut.addPersonalInformation(personData.userName,personData.userLastName,personData.postalCode);
    checkOut.clickOnCuntinueButton();
    checkOut.clickOnFinishButton();
    checkOut.verifySuccesfulCheckout();
  });
});

import ShoppingCardPage from "../Page/shoppingCardPage";
import { LoginRegister } from "../Page/loginPage";
const userData = require('../fixtures/user.json');

describe('Prueba de agregar artículos al carrito', () => {
  const carPage = new ShoppingCardPage();
  const login = new LoginRegister();

  beforeEach(() => {
    login.visitPageLogin();
    login.getUsername(userData.userName) 
    login.getPassword(userData.password)
    login.submit()
  });
  it('Debería agregar un artículo al carrito', () => {
    carPage.addProductBikeLight();
  });
  it('Debería agregar varios productos al carrito', () => {
    carPage.addProductBlackpack();
    carPage.addProductTShirt();
  });
});

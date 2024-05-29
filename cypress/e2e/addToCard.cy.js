import ShoppingCardPage from "../Page/shoppingCardPage";
import { LoginRegister } from "../Page/loginPage";

const userData = require('../fixtures/user.json');
const carPage = new ShoppingCardPage();
const login = new LoginRegister();

describe('Prueba de agregar artículos al carrito', () => {
  
  beforeEach(() => {
    login.visitPageLogin();
    login.getUsername(userData.userName) 
    login.getPassword(userData.password)
    login.submit()
  });
  it('Agregar un producto al carrito', () => {
    cy.log("Agregando un solo producto al carrito de compra");
    carPage.addProductBikeLight();
  });
  it('Agregar varios productos al carrito', () => {
    cy.log("Agregando tres productos al carrito de compra");
    carPage.addProductBikeLight();
    carPage.addProductBlackpack();
    carPage.addProductTShirt();
  });
});

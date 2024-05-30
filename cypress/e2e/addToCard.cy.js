import ShoppingCardPage from "../Page/shoppingCardPage";
import CommonPage from "../Page/commonPage";

const carPage = new ShoppingCardPage();
const commonPage = new CommonPage();

describe('Prueba de agregar artículos al carrito', () => {
  
  beforeEach(() => {
    commonPage.userLogin();
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

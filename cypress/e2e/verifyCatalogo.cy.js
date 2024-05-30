import CatalogoPage from "../Page/catalogoPage";
import CommonPage from "../Page/commonPage";

const catalogoPage = new CatalogoPage();
const commonPage = new CommonPage();

describe('Pruebas del catálogo de productos', () => {
  beforeEach(() => {
   commonPage.userLogin();
  });
  it('Mostrar las tarjetas en el catálogo', () => {
    catalogoPage.visitPageCatalogo();
    catalogoPage.validateAmountOfCardImages(6);
    catalogoPage.validateAmountOfCardsTitles(6);
    catalogoPage.validateAmountOfCardSubTitles(6);
  });
});

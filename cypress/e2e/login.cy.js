import { LoginRegister } from "../Page/loginPage";
const loginPage = new LoginRegister();
const userData = require('../fixtures/user.json');

describe('Pruebas de login con diferentes usuarios', () => {
  beforeEach(() => {
    loginPage.visitPageLogin();
  });
  it('Login con diferentes usuarios', () => {
    loginPage.getUsername(userData.userName) 
    loginPage.getPassword(userData.password)
    loginPage.submit()
    });
  });

export class LoginRegister { 
        constructor() {
          this.usernameInput = '#user-name';
          this.passwordInput = '#password';
          this.loginButton = '#login-button';
        }
        visitPageLogin () {
          cy.visit('/');
        }
        getUsername = (userName) => {
          cy.get(this.usernameInput).clear().type(userName);
        }
        getPassword = (password) => {
          cy.get(this.passwordInput).clear().type(password);
        }
        clickLogin = () => {
          cy.get(this.loginButton).click();
        }
        submit = () => {
          this.clickLogin();
        }
    }
//user-name
//password
import { LoginRegister } from "./loginPage";
const login = new LoginRegister();
const userData = require('../fixtures/user.json');

export default class CommonPage {

    userLogin (){
        login.visitPageLogin();
        login.getUsername(userData.userName); 
        login.getPassword(userData.password);
        login.submit();
    }  
}
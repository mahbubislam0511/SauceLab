// @ts-check

class LoginPage {
    constructor(page) {
      this.page = page;
      this.usernameInput = page.locator('#user-name');
      this.passwordInput = page.locator('#password');
      this.loginButton = page.locator('#login-button');
      this.errorMessage = page.locator('[data-test="error"]');
    }
  
    async goToLoginPage() {
      await this.page.goto('https://www.saucedemo.com/');
      await this.page.waitForTimeout(2000);
    }
  
    async loginToApplication(username, password) {
      await this.usernameInput.fill(username);
      await this.page.waitForTimeout(2000);
      await this.passwordInput.fill(password);
      await this.page.waitForTimeout(2000);
      await this.loginButton.click();
      await this.page.waitForTimeout(3000);
    }
  
    async getErrorMessage() {
      return await this.errorMessage.textContent();
    }
  }

module.exports = {LoginPage};
  
 
  
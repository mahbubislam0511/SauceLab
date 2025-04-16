class LoginPage {
    constructor(page) {
      this.page = page;
      this.usernameInput = page.locator('#user-name');
      this.passwordInput = page.locator('#password');
      this.loginButton = page.locator('#login-button');
      this.errorMessage = page.locator('[data-test="error"]');
    }
  
    async goToLoginPage() {
      await this.page.goto('https://www.saucedemo.com/', { timeout: 10000 });
    }
  
    async loginToApplication(username, password) {
      await this.usernameInput.fill(username, { timeout: 30000 });
      await this.passwordInput.fill(password);
      await this.loginButton.click();
    }
  
    async getErrorMessage() {
      return await this.errorMessage.textContent();
    }
  }

module.exports = {LoginPage};
  
 
  
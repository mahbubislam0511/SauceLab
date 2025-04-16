const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../Pages/LoginPage');

test.describe('Login Page Tests', () => {
  test('should login successfully with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goToLoginPage();
    await loginPage.loginToApplication('standard_user', 'secret_sauce');
    // Check for redirection to inventory page
    await expect(page).toHaveURL(/.*inventory\.html/);

  });

  test('should show error message on invalid login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goToLoginPage();
    
    await loginPage.loginToApplication('invalid_user', 'wrong_password');

    const error = await loginPage.getErrorMessage();
    expect(error).toContain('Username and password do not match');

  });
});
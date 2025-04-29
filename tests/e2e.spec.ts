import { test, expect } from '@playwright/test';
const { LoginPage } = require('../Pages/LoginPage');
const { HomePage } = require('../Pages/HomePage');
const { CartPage } = require('../Pages/CartPage');

test.describe('End To End Tests', () => {
    test('Verify that products are being added to cart section', async ({ page }) => {
      const loginPage = new LoginPage(page);
      const homePage = new HomePage(page);
      const cartPage = new CartPage(page);
      await loginPage.goToLoginPage();
      await loginPage.loginToApplication('standard_user', 'secret_sauce');
      await homePage.addProductToCart('Sauce Labs Backpack');
      await homePage.addProductToCart('Sauce Labs Onesie');
      await homePage.goToShoppingCart();
      const status = await cartPage.checkProductInCart('Sauce Labs Backpack');
      expect(await status).toBe(true);
    });

    test('Verify that products are being removed from cart section', async ({ page }) => {
      const loginPage = new LoginPage(page);
      const homePage = new HomePage(page);
      const cartPage = new CartPage(page);
      await loginPage.goToLoginPage();
      await loginPage.loginToApplication('standard_user', 'secret_sauce');
      await homePage.addProductToCart('Sauce Labs Backpack');
      await homePage.addProductToCart('Sauce Labs Onesie');
      await homePage.goToShoppingCart();
      const status = await cartPage.checkProductInCart('Sauce Labs Backpack');
      expect(await status).toBe(true);
    });
  });
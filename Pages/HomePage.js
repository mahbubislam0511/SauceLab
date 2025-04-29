class HomePage {
    constructor(page) {
        this.page = page;
        this.productList = page.locator('.inventory_item_name ');
        this.addToCart = page.locator('#add-to-cart');
        this.backToProducts = page.locator('#back-to-products');
        this.shoppingCart = page.locator('.shopping_cart_link');
    }

    // async addProductToCart(productName){
    //     //const productList = await this.page.$$(this.productList);
    //     for(const product of this.productList){
    //         if(productName === await product.textContent()){
    //             await product.click();
    //             break;
    //         }
    //     }
    //      await this.page.waitForTimeout(2000);
    //      await this.addToCart.click();
    //      await this.backToProducts.click();
    //      await this.page.waitForTimeout(5000);
    // }

    async addProductToCart(productName) {
        const productCount = await this.productList.count();
        for (let i = 0; i < productCount; i++) {
            const product = this.productList.nth(i);
            const name = await product.textContent();
            if (name.trim() === productName) {
                await product.click();
                break;
            }
        }
        await this.page.waitForTimeout(2000);
        await this.addToCart.click();
        await this.backToProducts.click();
        await this.page.waitForTimeout(5000);
    }

    async goToShoppingCart(){
        await this.shoppingCart.click();
    }
}

module.exports = {HomePage};
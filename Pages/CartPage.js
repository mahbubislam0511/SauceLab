class CartPage{
    constructor(page){
        this.page = page;
        this.productListOnCart = '//div[@class="inventory_item_name"]';
    }

    async checkProductInCart(productName){
        const productsInCart = await this.page.$$(this.productListOnCart);
        for (const product of productsInCart){
            console.log(await product.textContent())
            if(productName === await product.textContent()){
                return true;
            break;
            }
        }
    }
}

module.exports = { CartPage }
export function Addtocart(cartArg,product){
    console.log(cartArg)
    let cart = {...cartArg}
    if (cart.products.length) {
        const productIndex = cart.products.findIndex(e => e.id == product.id);
        if (productIndex == -1) {
            cart.products.push({
                ...product,
                productQty: 1
            });
            cart.totalPrice +=  product.price
        }
        else {
            cart.products[productIndex] = {
                ...cart.products[productIndex],
                productQty : cart.products[productIndex].productQty + 1
            }
            cart.totalPrice += product.price
        }
    }
    else {
        cart.products.push({
            ...product,
            productQty: 1
        });
        cart.totalPrice += product.price
    };
    return cart;
}
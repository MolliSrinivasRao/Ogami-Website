export function Addtocart(cartArg, product) {
    console.log(cartArg)
    let cart = { ...cartArg }
    if (cart.products.length) {
        const productIndex = cart.products.findIndex(e => e.id == product.id);
        if (productIndex == -1) {
            cart.products.push({
                ...product,
                productQty: 1
            });
            cart.totalPrice += product.price
        }
        else {
            cart.products[productIndex] = {
                ...cart.products[productIndex],
                productQty: cart.products[productIndex].productQty + 1
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
    return cart;
}
export const deleteCart = () => {
    return {
        products: [],
        totalPrice: 0,
    }
}

export const deleteproduct = (cartArg, product) => {
    const cart = { ...cartArg };
    let price = product.price;
    if (product.discount) price -= product.discount;
    cart.products = cart.product.filter(e => e.id !== product.id);
    cart.totalprice -= price * product.productQty;
    return cart;
}
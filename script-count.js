const countInCart = Object.keys(cart).length;
if (document.getElementById('cart-count')) {
    document.getElementById('cart-count').innerText = countInCart;
}

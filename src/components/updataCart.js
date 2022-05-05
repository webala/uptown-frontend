import getCookie from "./getCookie"
const updataBtns = Array.from(document.getElementsByClassName('update-btn'))

updataBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        var productId = btn.dataset.product
        var action = btn.dataset.action

        console.log(productId, action)

        updataCart(productId, action)
    })
})

export default function updataCart (productId, action) {
    var cart = JSON.parse(getCookie('cart'))

    if (action == 'add') {
        if (cart[productId] == undefined) {
            cart[productId] = {'quantity': 1}
        } else {
            cart[productId]['quantity'] += 1
        }
    } else if (action == 'remove') {
        cart[productId]['quantity'] -= 1

        if (cart[productId]['quantity'] <= 0) {
            delete cart[productId]
        }
    }
    
    console.log(cart)
    document.cookie = 'cart=' + JSON.stringify(cart) + 'domain=;path=/'
}
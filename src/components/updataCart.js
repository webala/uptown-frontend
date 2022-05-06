import getCookie from "./getCookie"


export default function updateCart (productId, action) {

    //const [cart, setCart] = useCookies({})

    console.log('update cart called')
    var cart = JSON.parse(getCookie('cart'))
    
    if (action == 'add') {
        if (cart[productId] == undefined) {
            cart[productId] = {'quantity': 1}
        }
        else {
            cart[productId]['quantity'] += 1;
        }
    }
    else if (action == 'remove') {
        cart[productId]['quantity'] -= 1;

        if (cart[productId]['quantity'] <= 0) {
            console.log('Remove item');
            delete cart[productId];
        }
    }
    console.log(cart);
    document.cookie = 'cart=' + JSON.stringify(cart)  
}
const products = [
    {
        name: 'Asus ROG Strix Scar G15',
        price: '1200',
        link: '/products/g15.html',
        image: '/assets/546A0081-35C3-488F-BA26-EA2FFBC9E79F.png',
    },
    {
        name: 'Asus Zenbook Duo',
        price: '2400',
        link: '/products/zenbook.html',
        image: '/assets/269f6f2e-25e4-48fb-8926-b1f5d4ca75a0.png',
    },
    {
        name: 'Apple MacBook Pro M1 Ultra',
        price: '2200',
        link: '/products/macbook.html',
        image: '/assets/mxw_640,f_auto.avif',
    },
    {
        name: 'Dell Alienware X1',
        price: '1800',
        link: '/products/macbook.html',
        image: '/assets/mxw_640,f_auto.avif',
    },
    {
        name: 'Lenovo Think Pad Yoga',
        price: '800',
        link: '/products/thinkpad.html',
        image: '/assets/My project2.png',
    },
    {
        name: 'HP Spectre',
        price: '2000',
        link: '/products/spectre.html',
        image: '/assets/My project 3.png',
    },
    {
        name: 'Dell XPS 17',
        price: '2600',
        link: '/products/xps17.html',
        image: '/assets/My project copy.png',
    },
    {
        name: 'Microsoft Surface Book',
        price: '1500',
        link: '/products/surfacebook.html',
        image: '/assets/588526af6f293bbfae451a38.png',
    },
];

const orders = JSON.parse(window.localStorage.getItem('orders') || '[]');
const cart = JSON.parse(window.localStorage.getItem('cart') || '{}');

function setItemsInCart(id, quantity) {
    if (quantity > 0) {
        const item = products[id];

        if (!item) {
            alert('Invalid product');
        } else {
            cart[id] = quantity;
        }
    } else {
        delete cart[id];
    }

    window.localStorage.setItem('cart', JSON.stringify(cart));
    if (document.getElementById(`counter_${id}`)) {
        document.getElementById(`counter_${id}`).innerText = cart[id] || 0;
    }
}

function addItemInCart(id) {
    setItemsInCart(id, (cart[id] || 0) + 1);
}

function removeItemFromCart(id) {
    setItemsInCart(id, (cart[id] || 1) - 1);
}

function preBook() {
    const key = 'prebook-item';

    if (!window.localStorage.getItem(key)) {
        window.localStorage.setItem(key, 1);
        alert('Prebooked Successfully!')
        window.location.reload();
    } else alert('You have already prebooked this device');
}

function addbtn() {
    const keys = Object.keys(cart);

    for (let i = 0; i < keys.length; i += 1) {
        const htmlElem = document.getElementById(keys[i]);
        if (htmlElem) {
            htmlElem.innerHTML = `
                <span class="counter">
                    <input type="button" value="-" onclick="removeItemFromCart('${keys[i]}')">
                    <span id="counter_${keys[i]}">${cart[keys[i]]}</span>
                    <input type="button" value="+" onclick="addItemInCart('${keys[i]}')">
                </span>
            `;
        }
    }
}

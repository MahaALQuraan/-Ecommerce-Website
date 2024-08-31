const products = [{
    id: 0,
    image: 'images/c1.webp',
    title: 'Flip Foldable Mobile',
    price: 120,
}, {
    id: 1,
    image: 'images/c2.webp',
    title: 'Air Pods Pro',
    price: 60,
}, {
    id: 2,
    image: 'images/c3.webp',
    title: '250D DSLR Camera',
    price: 230,
}, {
    id: 3,
    image: 'images/c4.webp',
    title: 'Head Phones',
    price: 100,
},{
    id:4,
    image:'images/c5.webp',
    title:'Laptop camera',
    price:200,
} ,{
    id:5,
    image:'images/c6.webp',
    title:'Laptop',
    price:500,

}];

let i = 0;

// Render product list
document.getElementById('head').innerHTML = products.map((item) => {
    var { image, title, price } = item;
    return (
        `<div class='box'>
            <div class="img-box">
                <img class="images" src="${image}" alt="${title}">
            </div>
            <div class='bottom'>
                <p>${title}</p>
                <h2>$${price}.00</h2> 
                <button onclick='addtocart(${i++})'>Add to cart</button>
            </div>
        </div>`
    );
}).join('');

var cart = [];

// Add item to cart
function addtocart(a) {
    cart.push({...products[a]});
    displaycart();
}

// Remove item from cart
function delElement(a) {
    cart.splice(a, 1);
    displaycart();
}

// Display cart contents
function displaycart() {
    document.getElementById('count').innerHTML = cart.length;
    let j = 0, total = 0;
    
    if (cart.length === 0) {
        document.getElementById('cartItem').innerHTML = 'Your Cart is Empty';
        document.getElementById('footcount').innerHTML = "$0.00";
    } else {
        document.getElementById('cartItem').innerHTML = cart.map((items) => {
            var { image, title, price } = items;
            total += price;
            document.getElementById('footcount').innerHTML = "$" + total + ".00";
            return (`
                <div class="cart-item">
                    <div class='row-img'>
                        <img class='rowimg' src="${image}" alt="${title}">
                    </div>
                    <p style='font-size:12px'>${title}</p>
                    <h2 style='font-size:15px'>$${price}.00</h2>
                    <i class='fa-solid fa-trash' onclick='delElement(${j++})'></i>
                </div>
            `);
        }).join('');
    }
}

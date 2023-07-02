const itemsObj = JSON.parse(itemsData);
console.log(itemsObj);

const contentEl = document.querySelector('.content');
let counterAlt = 1;

itemsObj.forEach(element => {

    const productBox = document.createElement('div');
    productBox.classList.add('product');
    contentEl.appendChild(productBox);

    const imgEl = document.createElement('img');
    imgEl.src = `${element.image}`;
    imgEl.alt = `${counterAlt} товар`;
    imgEl.classList.add('product__image');
    productBox.appendChild(imgEl);
    counterAlt++;

    const cartEl = document.createElement('div');
    cartEl.classList.add('cart');

    const addToCartButton = document.createElement('button');
    addToCartButton.classList.add('cart__button');
    cartEl.appendChild(addToCartButton);

    const cartTextEl = document.createElement('p');
    cartTextEl.textContent = 'Add To Cart';
    cartTextEl.classList.add('cart__text');
    addToCartButton.appendChild(cartTextEl);

    productBox.appendChild(cartEl);

    const productTextBox = document.createElement('div');
    productTextBox.classList.add('product__text');
    productBox.appendChild(productTextBox);

    const productTitleEl = document.createElement('h6');
    productTitleEl.textContent = `${element.title}`;
    productTitleEl.classList.add('product__title');
    productTextBox.appendChild(productTitleEl);

    const productDecriptionEl = document.createElement('p');
    productDecriptionEl.textContent = `${element.decription}`;
    productDecriptionEl.classList.add('product__description');
    productTextBox.appendChild(productDecriptionEl);

    const productPriceEl = document.createElement('p');
    productPriceEl.textContent = `${element.currency}${element.price}`;
    productPriceEl.classList.add('product__price');
    productTextBox.appendChild(productPriceEl);
});

addToCartButton.addEventListener('click', function (e) {
    console.log();
});
const itemsObj = JSON.parse(itemsData);

const contentEl = document.querySelector('.content');
let counterAlt = 1;

const cartBoxEl = document.querySelector('.display__none');
const cartSelected = document.querySelector('.cart-box__selected');
let counterCartItems = 0;

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

    addToCartButton.addEventListener('click', function (e) {

    });
});

const addButtons = document.querySelectorAll('.cart__button');

addButtons.forEach(element => {
    element.addEventListener('click', function (e) {
        counterCartItems++;
        cartBoxEl.classList.remove('display__none');
        cartBoxEl.classList.add('cart-box');

        const productCartEl = document.createElement('div');
        productCartEl.classList.add('cart__product');
        cartSelected.appendChild(productCartEl);

        const imgCartEl = document.createElement('img');
        imgCartEl.src = element.parentNode.parentNode.querySelector('.product__image').src;
        imgCartEl.classList.add('cart__product_image');
        productCartEl.appendChild(imgCartEl);

        const productCartContentBox = document.createElement('div');
        productCartContentBox.classList.add('cart__product_content');
        productCartEl.appendChild(productCartContentBox);

        const titleCartBox = document.createElement('div');
        titleCartBox.classList.add('cart__product_title');
        productCartContentBox.appendChild(titleCartBox);

        const titleCartEl = document.createElement('h3');
        titleCartEl.textContent = element.parentNode.parentNode.querySelector('.product__title').textContent;
        titleCartBox.appendChild(titleCartEl);

        const crissCrossEl = document.createElement('img');
        crissCrossEl.src = 'img/criss-cross.svg';
        crissCrossEl.classList.add('criss-cross');
        titleCartBox.appendChild(crissCrossEl);

        const productCartPriceLineEl = document.createElement('p');
        productCartPriceLineEl.textContent = 'Price:';
        productCartPriceLineEl.classList.add('cart__product_price');
        productCartContentBox.appendChild(productCartPriceLineEl);

        const priceCartEl = document.createElement('span');
        priceCartEl.textContent = element.parentNode.parentNode.querySelector('.product__price').textContent;
        priceCartEl.classList.add('cart__product_price_JS');
        productCartPriceLineEl.appendChild(priceCartEl);

        const colorLine = document.createElement('p');
        colorLine.textContent = 'Color: ';
        colorLine.classList.add('cart__product_color');
        productCartContentBox.appendChild(colorLine);

        const colorEl = document.createElement('span');
        // colorEl.textContent = ;
        colorEl.classList.add('cart__product_color_JS');
        colorLine.appendChild(colorEl);

        const sizeLine = document.createElement('p');
        sizeLine.textContent = 'Size: ';
        sizeLine.classList.add('cart__product_size');
        productCartContentBox.appendChild(sizeLine);

        const sizeEl = document.createElement('span');
        // sizeEl.textContent = element.size;
        sizeEl.classList.add('cart__product_size_JS');
        sizeLine.appendChild(sizeEl);

        const quantityBox = document.createElement('div');
        quantityBox.classList.add('cart__product_quantity');
        productCartContentBox.appendChild(quantityBox);

        const quantityLine = document.createElement('p');
        quantityLine.textContent = 'Quantity: ';
        quantityLine.classList.add('cart__product_quantity-text');
        quantityBox.appendChild(quantityLine);

        const quantityEl = document.createElement('input');
        // quantityEl.value = element.quantity;
        quantityEl.type = 'number';
        quantityEl.classList.add('cart__product_input');
        quantityLine.appendChild(quantityEl);

        crissCrossEl.addEventListener('click', function (e) {
            counterCartItems--;
            productCartEl.remove();
            if (counterCartItems == 0) {
                cartBoxEl.classList.remove('cart-box');
                cartBoxEl.classList.add('display__none');
            }
        });
    });
});
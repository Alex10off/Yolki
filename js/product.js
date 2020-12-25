(function () {
    let catalog = document.querySelector('.catalog');

    if (catalog === null) {
        return;
    };

    let changeProductOrderInfo = function (target) {
        let product = myLib.closestItemByClass(target, 'product');
        let order = document.querySelector('.popup-order');
        let productTitle = product.querySelector('.price-card__title').textContent;
        //var productSize = product.querySelector('.product__sizeis-active').textContent;
        let productPrice = product.querySelector('.price-card__cost').textContent;
        let productImgSrc = product.querySelector('.product__img').getAttribute('src');

        order.querySelector('.order-info-title').setAttribute('value', productTitle);
        //order.querySelector('.order-info-size').setAttribute('value', productSize);
        order.querySelector('.order-info-price').setAttribute('value', productPrice);

        order.querySelector('.order-product-title').textContent = productTitle;
        order.querySelector('.order-product-price').textContent = productPrice;
        //order.querySelector('.order__size').textContent = productSize;
        order.querySelector('.order__img').setAttribute('src', productImgSrc);
    };

    catalog.addEventListener('click', function (e) {
        let target = e.target;

        if (target.classList.contains('product__size') && !target.classList.contains('is-active')) {
            e.preventDefault();
            changeProductSize(target);
        }

        if (target.classList.contains('product__btn')) {
            e.preventDefault();
            changeProductOrderInfo(target);
        }
    });
})()
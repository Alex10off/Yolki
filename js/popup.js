(function () {
    //let body = document.querySelector('body');

    let closestItemByClass = function (item, className) {
        let node = item;

        while (node) {
            if (node.classList.contains(className)) {
                return node;
            }
            node = node.parentElement;
        }
        return null;
    };

    let showPopup = function (target) {
        target.classList.add('popup_active');
    };
    let closePopup = function (target) {
        target.classList.remove('popup_active');
    };
    let toggleScroll = function () {
        myLib.body.classList.toggle('no-scroll');
    };

    myLib.body.addEventListener('keydown', function (e) {
        if (e.keyCode !== 27) {
            return;
        }
        let popup = document.querySelector('.popup_active');

        if (popup) {
            closePopup(popup);
            toggleScroll();
        }
    });

    myLib.body.addEventListener('click', function (e) {
        let target = e.target;
        if (target.classList.contains('popup__btn-close') || target.classList.contains('popup__inner')) {
            let popup = closestItemByClass(target, 'popup');

            closePopup(popup);
            toggleScroll();
        }
    })
    myLib.body.addEventListener('click', function (e) {
        let target = e.target;
        let popupClass = target.getAttribute('data-popup');

        e.preventDefault();
        let popup = document.querySelector('.' + popupClass);

        if (popup) {
            showPopup(popup);
            toggleScroll();
        }
    });
})();
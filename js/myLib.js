(function () {
    window.myLib = {}

    window.myLib.body = document.querySelector('body');

    window.myLib.closestItemByClass = function (item, className) {
        let node = item;

        while (node) {
            if (node.classList.contains(className)) {
                return node;
            }
            node = node.parentElement
        }
        return null;
    };
})();
document.addEventListener(
    'DOMContentLoaded',
    function() {
        // Flickity Start
        const elem = document.querySelector('.main-carousel');
        var flkty = new Flickity(elem, {
            // options
            cellAlign: 'left',
            contain: true
        });

        var flkty = new Flickity('.main-carousel', {
            // options
        });

        // Add Product To Cart
        let counter = 0;
        const buttons = document.querySelectorAll('.add-product');
        const cartCounter = document.getElementsByClassName('cart-counter');

        // Functions
        function handleCartCounter() {
            counter++;
            if (counter > 0) {
                cartCounter[0].textContent = counter;
                cartCounter[0].classList.remove('cart-counter-noshow');
                cartCounter[0].classList.add('cart-counter-show');
            }
        }

        function resetCounter() {
            counter = 0;
            cartCounter[0].textContent = counter;
            cartCounter[0].classList.add('cart-counter-noshow');
            cartCounter[0].classList.remove('cart-counter-show');
        }

        // Add event listener
        function start() {
            cartCounter[0].addEventListener('click', () => {
                resetCounter();
            });
            buttons.forEach(element => {
                element.addEventListener('click', () => {
                    handleCartCounter();
                });
            });
        }

        start();
        console.log(cartCounter);
    },
    false
);

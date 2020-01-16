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
        const navLinks = document.querySelectorAll('.nav-link');

        // Functions
        function handleCartCounter() {
            // Add +1 counter
            counter++;
            if (counter > 0) {
                cartCounter[0].textContent = counter;
                // Display the counter
                cartCounter[0].classList.remove('cart-counter-noshow');
                cartCounter[0].classList.add('cart-counter-show');
            }
        }

        function resetCounter() {
            // Set counter to 0
            counter = 0;
            cartCounter[0].textContent = counter;
            // Hide counter
            cartCounter[0].classList.add('cart-counter-noshow');
            cartCounter[0].classList.remove('cart-counter-show');
        }

        function handleLinks(e) {
            // Prevent default behaviour
            e.preventDefault();
            // Get clicked element
            let path = e.path[0].getAttribute('href');
            // Scroll to element
            document.getElementById(path).scrollIntoView({
                block: 'nearest',
                behavior: 'smooth'
            });
        }

        // Add all event listeners
        function start() {
            cartCounter[0].addEventListener('click', () => {
                resetCounter();
            });
            buttons.forEach(element => {
                element.addEventListener('click', () => {
                    handleCartCounter();
                });
            });
            navLinks.forEach(element => {
                element.addEventListener('click', e => {
                    handleLinks(e);
                });
            });
        }

        start();
    },
    false
);

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

        navLinks.forEach(function(element) {
            // add click listener for the element in this iteration of the loop
            element.addEventListener('click', e => {
                e.preventDefault();
                let path = e.path[0].text.toLowerCase();
                document
                    .getElementById(path)
                    .scrollIntoView({ block: 'nearest', behavior: 'smooth' });
            });
            // how can you get the "href" attribute value of the clicked element to create a string that corresponds the id of the correct section?
            // get the section by its id using the string from the last step
            // scroll to that section with .scrollIntoView()
        });

        start();
    },
    false
);

$(document).ready(function () {
    $('.mostPopular__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 1230,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 760,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
        ]
    });


    $('.comments__slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        dots: true,
        responsive: [

            {
                breakpoint: 690,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    centeredMode: true
                }
            },
        ]
    });


    $('.categories__element').each(function (index) {
        $(this).click(function () {
            window.location = 'search.html'
        })
    })

    const selectedAll = document.querySelectorAll(".selected");
    selectedAll.forEach(selected => {
        const optionsContainer = selected.previousElementSibling

        const optionsList = optionsContainer.querySelectorAll('.option')

        selected.addEventListener('click', () => {
            if (optionsContainer.classList.contains('active')) {
                optionsContainer.classList.remove('active')
            } else {
                let currentActive = document.querySelector('.options-container.active')
                if (currentActive) {
                    currentActive.classList.remove('active')
                }
                optionsContainer.classList.add('active');
            }
        })

        optionsList.forEach(option => {
            option.addEventListener('click', () => {
                selected.innerHTML = option.querySelector('label').innerHTML;
                optionsContainer.classList.remove('active')
            })
        })
    })


    // Animation
    AOS.init({
        // Global settings:
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 500, // values from 0 to 3000, with step 50ms
        easing: 'ease-in-out', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-center', // defines which position of the element regarding to window should trigger the animation

    });

});
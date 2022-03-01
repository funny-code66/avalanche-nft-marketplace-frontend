// Template Name: Funto - HTML NFT Marketplace
// Template Author: Designing World
// Template Author URL: https://themeforest.net/user/designing-world
// Version: 1.0.2

"use strict";

// :: Mobile Dropdown Menu 

function mobileDropdownMenu() {
    let sbdropdown = document.querySelectorAll('.ft-dd').length;

    if (sbdropdown > 0) {
        let navUrl = document.querySelectorAll('.navbar-nav li ul');
        let navUrlLen = navUrl.length;

        for (let i = 0; i < navUrlLen; i++) {
            navUrl[i].insertAdjacentHTML('beforebegin', '<div class="dropdown-toggler"><i class="bi bi-caret-down-fill"></i></div>');
        }

        let ddtroggler = document.querySelectorAll('.dropdown-toggler');
        let ddtrogglerlen = ddtroggler.length;

        for (let i = 0; i < ddtrogglerlen; i++) {
            ddtroggler[i].addEventListener('click', function () {
                let ddNext = ddtroggler[i].nextElementSibling;
                slideToggle(ddNext, 300);
            });
        }
    }
}

window.addEventListener('load', mobileDropdownMenu);

// :: Sticky Header 

let navarToggler = document.querySelector('.navbar-toggler');
let header = document.querySelector('.header-area');

if (navarToggler) {
    navarToggler.addEventListener('click', function () {
        header.classList.toggle('mobile-menu-open');
    });
}

if (header) {
    function stickyNavigation() {
        if (window.pageYOffset > 10) {
            header.classList.add('sticky-on');
        } else {
            header.classList.remove('sticky-on');
        }
    }

    window.addEventListener('load', stickyNavigation);
    window.addEventListener('scroll', stickyNavigation);
}

// :: Anchor Prevent Default

let anchor = document.querySelectorAll('a[href="#"]');
let anchorLength = anchor.length;

if (anchorLength > 0) {
    for (let i = 0; i < anchorLength; i++) {
        anchor[i].addEventListener('click', function (e) {
            e.preventDefault();
        });
    }
}

// :: Wishlist Button 

let wishlistButton = document.querySelectorAll(".wishlist-btn");
let wishlistButtonLen = wishlistButton.length;

if (wishlistButtonLen > 0) {
    for (let x = 0; x < wishlistButtonLen; x++) {
        wishlistButton[x].addEventListener("click", function () {
            this.classList.toggle("active");
        })
    }
}

// :: Dashboard Menu Trigger

let dashboardMenuTrigger = document.getElementById("dashboardMenuTrigger");

if (dashboardMenuTrigger) {
    dashboardMenuTrigger.addEventListener('click', function () {
        document.querySelector('body').classList.toggle("dashboard-header-active");
    })
}

// :: Nice Select 

let popularSelect = document.getElementById("popularSelect");

if (popularSelect) {
    NiceSelect.bind(popularSelect, {
        searchable: false
    });
}

let filterSelect = document.querySelectorAll(".filter-select");
let filterSelectLen = filterSelect.length;

if (filterSelectLen > 0) {
    for (let i = 0; i < filterSelectLen; i++) {
        NiceSelect.bind(filterSelect[i], {
            searchable: false
        });
    }
}

let filterSelectSearch = document.querySelectorAll(".filter-select2");
let filterSelectSearchLen = filterSelectSearch.length;

if (filterSelectSearchLen > 0) {
    for (let i = 0; i < filterSelectSearchLen; i++) {
        NiceSelect.bind(filterSelectSearch[i], {
            searchable: true
        });
    }
}

// :: Ion Filter Range 
let filterRange = document.getElementById("filterRange");

if (filterRange) {
    ionRangeSlider(filterRange);
}

// :: Password Visibility

let inputPasswordId = document.getElementById('registerPassword');
let passwordButton = document.querySelector('.label-psswd');

if (inputPasswordId) {
    function passwordHideShow() {
        if (inputPasswordId.type === 'password') {
            inputPasswordId.type = 'text';
            passwordButton.innerHTML = 'Hide';
        } else {
            inputPasswordId.type = 'password';
            passwordButton.innerHTML = 'Show';
        }
    }
    passwordButton.addEventListener('click', passwordHideShow);
}

// :: Scroll to Top

let scrollButton = document.getElementById('scrollTopButton');
let topdistance = 600;

if (scrollButton) {
    window.addEventListener('scroll', function () {
        if (document.body.scrollTop > topdistance || document.documentElement.scrollTop > topdistance) {
            scrollButton.classList.add('scrolltop-show');
            scrollButton.classList.remove('scrolltop-hide');
        } else {
            scrollButton.classList.add('scrolltop-hide');
            scrollButton.classList.remove('scrolltop-show');
        }
    });

    scrollButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    });
}

// :: Featured Slide

if (document.querySelectorAll('.featured-nfts-slide').length > 0) {
    tns({
        'container': '.featured-nfts-slide',
        'items': 4,
        'gutter': 24,
        'slideBy': 1,
        'autoplay': true,
        'autoplayButtonOutput': false,
        'autoplayTimeout': 5000,
        'speed': 900,
        'loop': true,
        'mouseDrag': true,
        'nav': false,
        'controls': true,
        'controlsPosition': 'top',
        'controlsText': [('<i class="bi bi-arrow-left"></i>'), ('<i class="bi bi-arrow-right"></i>')],
        'responsive': {
            320: {
                'items': 1,
            },
            480: {
                'items': 1.3,
            },
            576: {
                'items': 1.5,
            },
            768: {
                'items': 2.4,
            },
            992: {
                'items': 3,
            },
            1200: {
                'items': 3.5,
            },
            1400: {
                'items': 4,
            }
        }
    });
}

// :: Client Feedback Slide

if (document.querySelectorAll('.client-feedback-content').length > 0) {
    tns({
        'container': '.client-feedback-slides',
        'items': 4,
        'gutter': 24,
        'slideBy': 1,
        'autoplay': false,
        'autoplayButtonOutput': false,
        'autoplayTimeout': 5000,
        'speed': 750,
        'loop': false,
        'mouseDrag': true,
        'controls': false,
        'navPosition': 'bottom',
        'autoHeight': true,
        'responsive': {
            320: {
                'items': 1
            },
            480: {
                'items': 1.7,
            },
            576: {
                'items': 2,
            },
            992: {
                'items': 3,
            },
            1200: {
                'items': 4,
            }
        }
    });
}

// :: Related Project Slide

if (document.querySelectorAll('.related-project-slide').length > 0) {
    tns({
        'container': '.related-project-slide',
        'items': 4,
        'gutter': 24,
        'slideBy': 1,
        'autoplay': true,
        'autoplayButtonOutput': false,
        'autoplayTimeout': 5000,
        'speed': 750,
        'loop': true,
        'mouseDrag': true,
        'controls': true,
        'nav': false,
        'controlsText': [('<i class="bi bi-arrow-left"></i>'), ('<i class="bi bi-arrow-right"></i>')],
        'responsive': {
            320: {
                'items': 1,
            },
            480: {
                'items': 1.3,
            },
            576: {
                'items': 1.5,
            },
            768: {
                'items': 2.4,
            },
            992: {
                'items': 3,
            },
            1200: {
                'items': 3.5,
            },
            1400: {
                'items': 4,
            }
        }
    });
}

// :: Trending Auction Slide

if (document.querySelectorAll('.trending-auction-slide').length > 0) {
    tns({
        'container': '.trending-auction-slide',
        'items': 2,
        'gutter': 24,
        'slideBy': 1,
        'autoplay': true,
        'autoplayButtonOutput': false,
        'autoplayTimeout': 5000,
        'speed': 750,
        'loop': true,
        'mouseDrag': true,
        'controls': false,
        'nav': false,
        'responsive': {
            320: {
                'items': 1,
            },
            576: {
                'items': 1.8,
            },
            768: {
                'items': 2.5,
            },
            992: {
                'items': 2,
            },
            1200: {
                'items': 2.5,
            },
            1400: {
                'items': 1.75,
            }
        }
    });
}

// :: Top Author Slide

if (document.querySelectorAll('.top-authors-slide').length > 0) {
    tns({
        'container': '.top-authors-slide',
        'items': 7,
        'gutter': 16,
        'slideBy': 1,
        'autoplay': true,
        'autoplayButtonOutput': false,
        'autoplayTimeout': 5000,
        'speed': 750,
        'loop': true,
        'mouseDrag': true,
        'nav': false,
        'controls': true,
        'controlsPosition': 'top',
        'controlsText': [('<i class="bi bi-arrow-left"></i>'), ('<i class="bi bi-arrow-right"></i>')],
        'responsive': {
            320: {
                'items': 3,
            },
            480: {
                'items': 4,
            },
            576: {
                'items': 5,
            },
            768: {
                'items': 4,
            },
            992: {
                'items': 4,
            },
            1200: {
                'items': 5,
            },
            1400: {
                'items': 7,
            }
        }
    });
}

// :: Top Buyer Slide

if (document.querySelectorAll('.top-buyer-slide').length > 0) {
    tns({
        'container': '.top-buyer-slide',
        'items': 7,
        'gutter': 16,
        'slideBy': 1,
        'autoplay': true,
        'autoplayButtonOutput': false,
        'autoplayTimeout': 5000,
        'speed': 750,
        'loop': true,
        'mouseDrag': true,
        'nav': false,
        'controls': true,
        'controlsPosition': 'top',
        'controlsText': [('<i class="bi bi-arrow-left"></i>'), ('<i class="bi bi-arrow-right"></i>')],
        'responsive': {
            320: {
                'items': 3,
            },
            480: {
                'items': 4,
            },
            576: {
                'items': 5,
            },
            768: {
                'items': 4,
            },
            992: {
                'items': 4,
            },
            1200: {
                'items': 5,
            },
            1400: {
                'items': 7,
            }
        }
    });
}

// :: Isotope

let grid = document.querySelector('.funto-collection-filter-list');

if (grid) {
    imagesLoaded(grid, function () {
        let iso = new Isotope(grid, {
            itemSelector: '.list-item',
            percentPosition: true,
            masonry: {
                columnWidth: '.list-item'
            }
        });

        let filtersElem = document.querySelector('.filters-button-group');

        if (filtersElem) {
            filtersElem.addEventListener('click', function (event) {
                if (!matchesSelector(event.target, 'button')) {
                    return;
                }
                let filterValue = event.target.getAttribute('data-filter');
                iso.arrange({
                    filter: filterValue
                });
            });
        }

        let buttonGroups = document.querySelectorAll('.filters-button-group');
        let buttonGroupslen = buttonGroups.length;

        for (let i = 0; i < buttonGroupslen; i++) {
            let buttonGroup = buttonGroups[i];
            radioButtonGroup(buttonGroup);
        }

        function radioButtonGroup(buttonGroup) {
            buttonGroup.addEventListener('click', function (event) {
                if (!matchesSelector(event.target, 'button')) {
                    return;
                }
                buttonGroup.querySelector('.active').classList.remove('active');
                event.target.classList.add('active');
            });
        }
    });
}

// :: Counter Up
let counterlen = document.querySelectorAll(".counter").length;

if (counterlen > 0) {
    let counterUp = window.counterUp.default;

    let callback = entries => {
        entries.forEach(entry => {
            let counterElement = entry.target
            if (entry.isIntersecting && !counterElement.classList.contains('is-visible')) {
                counterUp(counterElement, {
                    duration: 2000,
                    delay: 20
                });
                counterElement.classList.add('is-visible');
            }
        });
    }

    let IO = new IntersectionObserver(callback, {
        threshold: 1
    });

    let counterUpClass = document.querySelectorAll('.counter');
    let counterUpClasslen = counterUpClass.length;

    for (let i = 0; i < counterUpClasslen; i++) {
        IO.observe(counterUpClass[i]);
    }
}

AOS.init();

// :: Tooltip Activation

let funtoTooltip = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
let tooltipList = funtoTooltip.map(function (fTTooltip) {
    return new bootstrap.Tooltip(fTTooltip);
});

// :: Toast Activation

let funtoToast = [].slice.call(document.querySelectorAll('.toast'));
let toastList = funtoToast.map(function (fTToast) {
    return new bootstrap.Toast(fTToast);
});
toastList.forEach(toast => toast.show());

// :: Popover Activation

let funtoPopover = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
let popoverList = funtoPopover.map(function (ftPopover) {
    return new bootstrap.Popover(ftPopover);
});

// :: Preloader

let preloader = document.getElementById('preloader');

if (preloader) {
    window.addEventListener('load', function () {
        let fadeOut = setInterval(function () {
            if (!preloader.style.opacity) {
                preloader.style.opacity = 1;
            }
            if (preloader.style.opacity > 0) {
                preloader.style.opacity -= 0.1;
            } else {
                clearInterval(fadeOut);
                preloader.remove();
            }
        }, 20);
    });
}
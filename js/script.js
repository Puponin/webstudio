window.onload = function () {

    /* menu header */
    var menuStyle = getComputedStyle(nav_menu),
        homeSection = document.querySelector('.home-section'),
        activeSlide = document.querySelector('.index-slider');
    button.onclick = function () {
        if (menuStyle.display == "none" || menuStyle.marginRight == "-300px") {
            nav_menu.classList.add("active");
            button.classList.add("active");
            homeSection.style.marginRight = '300px';
            activeSlide.style.filter = 'opacity(50%)';
        } else {
            nav_menu.classList.remove("active");
            button.classList.remove("active");
            homeSection.style.marginRight = '0px';
            activeSlide.style.filter = 'opacity(100%)';
        }
    };
    /* end menu header */

    /* slider home-page */
    var indicator = document.querySelectorAll(".indicators li"),
        slideMain = document.querySelectorAll(".index-slider .index-slider__slide");

    for (var i = 0; i < indicator.length; i++) {
        indicator[i].addEventListener("click", slider);
    }

    function slider() {
        for (let i = 0; i < indicator.length; i++) {
            indicator[i].style.borderColor = '#121254';
            slideMain[i].classList.remove('active');
            if (indicator[i] === this) {
                indicator[i].style.borderColor = '#0e0e78';
                slideMain[i].classList.add('active');
            }
        }
    }
    var slideIndex = 0;
    autoSlider();
    function autoSlider() {
        for (let i = 0; i < slideMain.length; i++) {
            indicator[i].style.borderColor = '#121254';
            slideMain[i].classList.remove('active');
        }
        slideIndex++;
        if (slideIndex > slideMain.length) {
            slideIndex = 1;
        }
        indicator[slideIndex - 1].style.borderColor = '#0e0e78';
        slideMain[slideIndex - 1].classList.add('active');
        setTimeout(autoSlider, 3000);
    }
    /* end slider home-page */
};
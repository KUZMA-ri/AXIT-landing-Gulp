// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

// document.addEventListener('DOMContentLoaded', () => {

// Scroll to anchors
(function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('.header__nav').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;
    
        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());



// menu burger 
(function () {
    const burger = document.querySelector('.burger');
    burger.addEventListener('click', () => {
        burger.classList.toggle('burger_active');
    });
}());

(function () {
    const burger = document.querySelector('.burger');
    const headerNav = document.querySelector('.header__nav')
    burger.addEventListener('click', () => {
        headerNav.classList.toggle('header__nav_active');
    });
}());

(function () {
    const burger = document.querySelector('.burger');
    const headerList = document.querySelector('.header__list')
    burger.addEventListener('click', () => {
        headerList.classList.toggle('header__list_active');
    });
}());


//modal window

const modal = document.getElementById('myModal');
const openModalBtn = document.getElementById('myBtn');
const modalClose = document.getElementsByClassName("modal-close")[0];

openModalBtn.onclick = function () {
    modal.style.display = "block";
}

modalClose.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};




// })

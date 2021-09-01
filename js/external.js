const nav = document.querySelector('nav');
const ul = document.querySelector('ul');
const txt = ul.querySelectorAll('.text-white');
const toggler = document.querySelector('.navbar-toggler');


window.addEventListener('scroll', function () {
    if (window.pageYOffset > 100) {
        nav.classList.add('bg-light', 'shadow', 'navbar-light');
        // toggler.classList.add('custom-toggler');
        // toggler.classList.remove('navbar-toggler');
        // toggler.style.display = "none";

        for (i = 0; i < txt.length; i++) {
            txt[i].classList.add('text-dark');
            txt[i].classList.remove('text-white');
        }

    } else {
        nav.classList.remove('bg-light', 'shadow');
        // toggler.classList.remove('custom-toggler');
        // toggler.classList.add('navbar-toggler');

        for (i = 0; i < txt.length; i++) {
            txt[i].classList.remove('text-dark');
        }
    }
});

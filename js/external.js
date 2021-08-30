const nav = document.querySelector('nav');
const ul = document.querySelector('ul');
const txt = ul.querySelectorAll('.text-white');


window.addEventListener('scroll', function () {
    if (window.pageYOffset > 100) {
        nav.classList.add('bg-light', 'shadow', 'navbar-light');

        for (i = 0; i < txt.length; i++) {
            txt[i].classList.add('text-dark');
            txt[i].classList.remove('text-white');
        }

    } else {
        nav.classList.remove('bg-light', 'shadow');

        for (i = 0; i < txt.length; i++) {
            txt[i].classList.remove('text-dark');
        }
    }
});


// $(window).resize(function () {
//     If($(window).width() < 576){
//         $('.col-7').removeClass('col-7');
//     }
// });
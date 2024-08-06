// template_pu4mkvg
// service_3tl9ib6
//alBcTMoH30rSLBdXp

let contrastToggle = false;
const scaleFactor = 1/20;


function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for (let i = 0; i < shapes.length; ++i) {
        const isOdd = i  % 2 !== 0;
        const oddInteger = isOdd ? -1: 1;
        shapes[i].style.transform = `translate(${x * oddInteger}px, ${y * oddInteger}px)`
    }
}

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
    document.body.classList += " dark-theme"
    }   
    else{
        document.body.classList.remove("dark-theme")
    }
}

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classlist += " modal__overlay--visible";

    emailjs
      .sendForm(
        'service_3tl9ib6',
         'template_pu4mkvg',
            event.target,
            'alBcTMoH30rSLBdXp'
        ).then(() => {
            loading.classList.remove("modal__overlay--visible")
            success.classList += " modal__overlay--visible"
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible")
            alert(
                "The email service is currently unavailable. Please contact me directly on georgeftanneryv@gmail.com"
            );
        })
    setTimeout(() => {   
        console.log('it worked 1')
    }, 500);
}

let isModalOpen = false;
function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
}
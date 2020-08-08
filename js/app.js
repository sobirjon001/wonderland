const navSlide = () => {
    const burger = document.querySelector('.menue-toggle');
    const nav = document.querySelector('.nav-header');
    const navLinks = document.querySelectorAll('.nav-header li');
    const body = document.querySelector('body');

    burger.addEventListener('click',() => {

        // Toggle nav-links
        nav.classList.toggle('nav-active')

        // dissable overflow
        body.classList.toggle('frease')

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
            }
        })

        // Burger animation
        burger.classList.toggle('toggle')
    
    })

}

navSlide();
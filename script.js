document.addEventListener('DOMContentLoaded', function() {
    const welcomeSection = document.getElementById('welcome-section');
    const infoSection = document.querySelector('.info');
    const contactSection = document.getElementById('contact');
    const myPhoto = document.querySelector('.my-photo');
    const contactSectionItems = document.querySelectorAll('#contact .social-medias');

    // Function to animate the info section from top to bottom
    function animateInfoSection() {
        infoSection.style.opacity = 0;
        infoSection.style.transform = 'translateY(-50px)';
        infoSection.style.transition = 'opacity 1s ease, transform 1s ease';

        setTimeout(function() {
            infoSection.style.opacity = 1;
            infoSection.style.transform = 'translateY(0)';
        }, 100);
    }

    // Function to animate the contact section items from left to right
    function animateContactSection() {
        contactSectionItems.forEach(item => {
            item.style.opacity = 0;
            item.style.transform = 'translateX(-50px)';
            item.style.transition = 'opacity 1s ease, transform 1s ease';
        });

        setTimeout(function() {
            contactSectionItems.forEach(item => {
                item.style.opacity = 1;
                item.style.transform = 'translateX(0)';
            });
        }, 100);
    }

    // Function to handle showing/hiding and animating .my-photo based on scroll position
    function handleMyPhoto() {
        const scrollPosition = window.scrollY;
        const welcomeSectionBottom = welcomeSection.offsetTop + welcomeSection.offsetHeight;

        if (scrollPosition < welcomeSectionBottom) {
            myPhoto.style.opacity = 0;
            myPhoto.style.transform = 'translateX(-50px)';
            myPhoto.style.transition = 'opacity 1s ease, transform 1s ease';

            setTimeout(function() {
                myPhoto.style.opacity = 1;
                myPhoto.style.transform = 'translateX(0)';
            }, 100);
        } else {
            myPhoto.style.opacity = 0;
            myPhoto.style.transform = 'translateX(100%)';
            myPhoto.style.transition = 'opacity 1s ease, transform 1s ease';
        }
    }

    // Function to handle animations based on scroll position
    function handleAnimations() {
        const scrollPosition = window.scrollY;
        const sectionTop = welcomeSection.offsetTop;

        // Animate info section when scrolled into view
        if (scrollPosition > sectionTop - window.innerHeight * 0.8) {
            animateInfoSection();
        }

        // Animate contact section items when scrolled into view
        const contactSectionTop = contactSection.offsetTop;
        if (scrollPosition > contactSectionTop - window.innerHeight * 0.8) {
            animateContactSection();
        }

        // Show/hide and animate myPhoto based on scroll position
        handleMyPhoto();
    }

    // Initial animations check on page load
    animateInfoSection(); // Animate info section immediately
    animateContactSection(); // Animate contact section items immediately
    handleMyPhoto(); // Show/hide and animate myPhoto based on scroll on page load

    // Event listener for scroll to handle animations
    window.addEventListener('scroll', handleAnimations);

    // Event listener for hash change to handle myPhoto visibility
    window.addEventListener('hashchange', handleMyPhoto);
});
document.addEventListener('DOMContentLoaded', function() {
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navLinks = document.querySelector('.nav-links');

    navbarToggle.addEventListener('click', function() {
        navLinks.classList.toggle('show-nav');
    });
});


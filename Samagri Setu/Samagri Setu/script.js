document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const offsetPosition = targetElement.offsetTop - navbarHeight - 20;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                if (window.innerWidth < 992) {
                    const navbarToggler = document.querySelector('.navbar-toggler');
                    const navbarCollapse = document.getElementById('navbarNav');
                    if (navbarCollapse.classList.contains('show')) {
                        navbarToggler.click();
                    }
                }
            }
        });
    });

    // Highlight active nav link on scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Adjust offset to account for fixed navbar
            if (pageYOffset >= sectionTop - document.querySelector('.navbar').offsetHeight - 50) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
                link.setAttribute('aria-current', 'page');
            }
        });
    });


    // Optional: Add a simple form submission handler for contact form (client-side only)
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            console.log('Contact form submitted!');
            console.log('Name:', document.getElementById('name').value);
            console.log('Email:', document.getElementById('email').value);
            console.log('Message:', document.getElementById('message').value);

            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }

    // Optional: Add a simple form submission handler for login modal
    const loginForm = document.querySelector('#loginModal form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Login form submitted!');
            console.log('Email:', document.getElementById('loginEmail').value);
            console.log('Password:', document.getElementById('loginPassword').value);
            alert('Login attempt initiated. (This is a demo, no actual login)');
            bootstrap.Modal.getInstance(document.getElementById('loginModal')).hide();
            loginForm.reset();
        });
    }

    // Optional: Add a simple form submission handler for register modal
    const registerForm = document.querySelector('#registerModal form');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Register form submitted!');
            console.log('Name:', document.getElementById('registerName').value);
            console.log('Email:', document.getElementById('registerEmail').value);
            console.log('Password:', document.getElementById('registerPassword').value);
            console.log('User Type:', document.getElementById('userType').value);
            alert('Registration attempt initiated. (This is a demo, no actual registration)');
            bootstrap.Modal.getInstance(document.getElementById('registerModal')).hide();
            registerForm.reset();
        });
    }
});
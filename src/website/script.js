document.addEventListener('DOMContentLoaded', function () {
    
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
        console.log('Mobile device detected');
    
        // Adjust font sizes for the hero section on mobile
        document.querySelector('.hero-title').style.fontSize = '48px';
        document.querySelector('.hero-subtitle').style.fontSize = '24px';
        document.querySelector('.hero-description').style.fontSize = '16px';
    
        // Adjust the navigation bar layout for mobile
        const navLinks = document.querySelector('.nav-links');
        navLinks.style.flexDirection = 'column';
        navLinks.style.textAlign = 'center';
        navLinks.style.paddingTop = '20px'; // Add some padding to the top for spacing
        
        // Adjust each navigation link for mobile
        document.querySelectorAll('.nav-links li').forEach(li => {
            li.style.marginBottom = '10px';
            li.style.marginLeft = '0'; // Reset any left margin
        });
    
        // Adjust hero button to be full-width on mobile
        document.querySelector('.hero-button').style.width = '100%';
        document.querySelector('.hero-button').style.padding = '10px 0';
    
        // Adjust project grid to display items in a single column on mobile
        const projectGrid = document.querySelector('.project-grid');
        projectGrid.style.gridTemplateColumns = '1fr'; // Single column for projects
        projectGrid.style.gap = '20px'; // Adjust the gap between project cards
    
        // Adjust contact section buttons to be full-width on mobile
        const contactButtons = document.querySelectorAll('.contact-links .button');
        contactButtons.forEach(button => {
            button.style.width = '100%';
            button.style.padding = '10px 0';
            button.style.marginBottom = '10px'; // Add space between buttons
        });
    
        // Ensure video backgrounds fill the screen properly on mobile
        const videos = document.querySelectorAll('.section-with-video video');
        videos.forEach(video => {
            video.style.objectFit = 'cover'; // Make sure the video covers the entire section
        });
    
        // Add additional styles or modifications specific to mobile as needed
    }
    
    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Highlight navbar links based on scroll position
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Fade-in effect when elements are in view
    const fadeInElements = document.querySelectorAll('.animated-section');

    const observerOptions = {
        root: null,
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeInElements.forEach(el => {
        observer.observe(el);
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const filterItems = document.querySelectorAll('.filter-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            filterItems.forEach(item => {
                // Always hide items with the 'hidden' class
                if (item.classList.contains('hidden')) {
                    item.style.display = 'none';
                } else if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const filterItems = document.querySelectorAll('.filter-item');
    const loadMoreBtn = document.querySelector('.load-more-btn');

    let hiddenProjects = document.querySelectorAll('.hidden');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            filterItems.forEach(item => {
                if ((filter === 'all' && !item.classList.contains('hidden')) || item.classList.contains(filter)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });

            // If 'All' filter is selected, reset the Load More button and re-hide hidden projects
            if (filter === 'all') {
                hiddenProjects.forEach(project => {
                    project.classList.add('hidden');
                    project.style.display = 'none'; // Hide hidden projects again
                });
                loadMoreBtn.style.display = 'inline-block'; // Show the Load More button
            } else {
                loadMoreBtn.style.display = 'none'; // Hide Load More button for other filters
            }
        });
    });

    // Load More Button functionality
    loadMoreBtn.addEventListener('click', function () {
        hiddenProjects.forEach(project => {
            project.classList.remove('hidden');
            project.style.display = 'block'; // Ensure they are visible after being unhidden
        });
        loadMoreBtn.style.display = 'none'; // Hide the button after loading more projects
    });

    // Initial state - Show the Load More button
    loadMoreBtn.style.display = 'inline-block';
});
document.addEventListener('DOMContentLoaded', function () {
    // Typing Animation for Hero Section
    const typedText = document.querySelector('.typed-text');
    const cursor = document.querySelector('.cursor');
    const textArray = ["Software Engineering Student", "Creative Problem Solver", "Innovative Thinker"];
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 150);
        } else {
            setTimeout(erase, 2000);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typedText.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 100);
        } else {
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, 1000);
        }
    }

    setTimeout(type, 1000);  // Start the typing animation

    // Fade-In Animation for About Section
    const aboutSection = document.querySelector('#about .container');
    const aboutObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-left');
            }
        });
    });

    aboutObserver.observe(aboutSection);

    // Zoom-In Animation for Skills Section
    const skillsSection = document.querySelector('#skills .container');
    const skillsObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('zoom-in');
            }
        });
    });

    skillsObserver.observe(skillsSection);

    // Fade-In Animation for Projects Section
    const projectsSection = document.querySelector('#projects .container');
    const projectsObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-right');
            }
        });
    });

    projectsObserver.observe(projectsSection);

    // Slide-Up Animation for Contact Section
    const contactSection = document.querySelector('#contact .container');
    const contactObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-up');
            }
        });
    });

    contactObserver.observe(contactSection);
});

document.addEventListener('DOMContentLoaded', function () {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
        console.log('Mobile device detected');
    
        // Adjust the font sizes for all sections to be smaller on mobile
        document.querySelectorAll('h1, h2').forEach(element => {
            element.style.fontSize = '24px'; // Reduce header sizes
        });
    
        document.querySelectorAll('p, ul, .hero-description').forEach(element => {
            element.style.fontSize = '14px'; // Reduce paragraph and list sizes
        });
    
        // Adjust the navigation bar layout for mobile to fit items in two rows
        const navLinks = document.querySelector('.nav-links');
        navLinks.style.flexDirection = 'row';
        navLinks.style.flexWrap = 'wrap'; // Allow wrapping to create two rows
        navLinks.style.justifyContent = 'space-around'; // Evenly distribute items
    
        // Adjust the font size and spacing of the navbar links
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.style.fontSize = '14px'; // Smaller font size
            link.style.flex = '1 0 30%'; // Flex items to take up a third of the space each
            link.style.textAlign = 'center'; // Center text
        });
    
        // Reduce the space between sections
        document.querySelectorAll('section').forEach(section => {
            section.style.paddingTop = '2px';
            section.style.paddingBottom = '2px';
        });
    
        // Display only the top 3 project cards, hide the rest
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach((card, index) => {
            if (index >= 3) {
                card.style.display = 'none'; // Hide cards after the top 3
            }
        });
    
        // Adjust the project grid to display items one above the other on mobile
        const projectGrid = document.querySelector('.project-grid');
        projectGrid.style.gridTemplateColumns = '1fr'; // Single column for projects
    
        // Change the color of the project cards
        document.querySelectorAll('.project-card').forEach(card => {
            card.style.backgroundColor = '#434343b3'; // Change to a dark gray color
            card.style.padding = '10px';
            card.style.fontSize = '12px'; // Further reduce text size in project cards
        });
    
        // Left-align text in the Skills section
        document.querySelectorAll('#skills p, #skills ul').forEach(element => {
            element.style.textAlign = 'left'; // Left-align text in the Skills section
        });
    
        // Adjust the contact section buttons to fit side by side
        const contactButtons = document.querySelectorAll('.contact-links .button');
        contactButtons.forEach(button => {
            button.style.width = '45%'; // Make buttons fit side by side
            button.style.padding = '8px 0'; // Reduce padding
            button.style.margin = '5px'; // Add some margin for spacing
            button.style.display = 'inline-block'; // Ensure inline display
            button.style.fontSize = '12px'; // Reduce text size inside buttons
        });

        
    
        // Reduce the font size of the footer text
        document.querySelector('footer').style.fontSize = '14px';

        // Adjust video backgrounds for mobile and ensure playsinline for iOS
        videos.forEach(video => {
            video.style.objectFit = 'cover'; // Make sure the video covers the entire section
            video.setAttribute('playsinline', 'true'); // Ensure inline playback on iOS
        });

        // Reduce the size of social icons in the hero section
        const socialIcons = document.querySelectorAll('.social-icons a');
        socialIcons.forEach(icon => {
            icon.style.fontSize = '18px'; // Reduce icon size
        });
    
        // Reduce the scroll indicator size
        const scrollIndicator = document.querySelector('.scroll-indicator span');
        scrollIndicator.style.width = '20px';
        scrollIndicator.style.height = '40px';
    
        // Change the color of the filter buttons
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(button => {
            button.style.backgroundColor = '#434343b3'; // Dark gray color for the filter buttons
            button.style.color = '#fff'; // White text color
            button.style.border = 'none'; // Remove any borders
            button.style.padding = '8px'; // Adjust padding
            button.style.fontSize = '12px'; // Reduce font size
        });
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
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if(isMobile){
        const maxVisibleProjects = 3; 
    } else{
        const maxVisibleProjects = 6; 
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            filterItems.forEach((item, index) => {
                if (filter === 'all') {
                    if (index < maxVisibleProjects && !item.classList.contains('hidden')) {
                        item.style.display = 'block'; // Show only the top 3 visible projects
                    } else {
                        item.style.display = 'none'; // Hide all other projects
                    }
                } else if (item.classList.contains(filter)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });

            // If 'All' filter is selected, reset the Load More button and re-hide hidden projects
            if (filter === 'all') {
                hiddenProjects.forEach((project, index) => {
                    if (index >= maxVisibleProjects) {
                        project.classList.add('hidden');
                        project.style.display = 'none'; // Hide projects again
                    }
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

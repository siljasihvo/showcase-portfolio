// grab the header, all sections, and all navigation links from the page
const header = document.getElementById('main-header');
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

//run this block of code every time the user scrolls
window.addEventListener('scroll', () => {
  
  //make the header solid if scrolled down a bit, otherwise make it transparent
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }

  //figure out which section we are currently looking at
  let currentSection = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    
    //if srolled past the top of this section, remember its ID
    if (window.scrollY >= (sectionTop - 120)) {
      currentSection = section.getAttribute('id');
    }
  });

  //highlight the link in the header that matches the current section
  navLinks.forEach(link => {
    link.classList.remove('active');
    
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
});

// scroll reveals
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));
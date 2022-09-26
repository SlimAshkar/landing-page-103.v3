/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
function activateNavigation() {
    const sections = document.querySelectorAll(".section");
    const navContainer = document.createElement("floating-nav");
    const navItems = Array.from(sections).map(section => {
        return `
            <div class="nav-item" data-for-section="${section.id}">
              <a href="#${section.id}" class="nav-link"></a>
              <span class="nav-label">${section.dataset.label}</span>
            </div>
        `;
    });

    console.log(navContainer) 

    navContainer.classList.add("floating-nav");
    navContainer.innerHTML = navItems.join("");

    const observer = new IntersectionObserver(entries => {
      document.querySelectorAll(".nav-link").forEach(navLink => {
        navLink.classList.remove("nav-link-selected");
      });

      const visibleSection = entries.filter(entry => entry.isIntersecting)[0];
      console.log(visibleSection);
    }, { threshold: 0.5});

    sections.forEach(section => observer.observe(section));

    document.body.appendChild(navContainer);
  }

    activateNavigation();

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// function makeActive(){
//     for (cons section of sections) {
//         const box = section.getBoundingClientRect();
//         //Find a value that works best, but 150 seems to be a good start.
//         if (box.top <= VALUE && box.bottom >= VALUE) {
//         //apply active state on current section and corresponding Nav link
//         } else {
//         //Remove active state from other section and corresponding Nav link
//         }
//      }
//   }

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


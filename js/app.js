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
// */
// function activateNavigation() {
//     const sections = document.querySelectorAll(".section");
//     const navContainer = document.createElement("floating-nav");
//     const navItems = Array.from(sections).map(section => {
//         return `
//             <div class="nav-item" data-for-section="${section.id}">
//               <a href="#${section.id}" class="nav-link"></a>
//               <span class="nav-label">${section.dataset.label}</span>
//             </div>
//         `;
//     });

//     console.log(navContainer) 

//     navContainer.classList.add("floating-nav");
//     navContainer.innerHTML = navItems.join("");

//     const observer = new IntersectionObserver(entries => {
//       document.querySelectorAll(".nav-link").forEach(navLink => {
//         navLink.classList.remove("nav-link-selected");
//       });

//       const visibleSection = entries.filter(entry => entry.isIntersecting)[0];
//       console.log(visibleSection);
//     }, { threshold: 0.5});

//     sections.forEach(section => observer.observe(section));

//     document.body.appendChild(navContainer);
//   }

//     activateNavigation();

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

let menu = document.getElementById("menu");
let viewportHeight = window.innerHeight;
let navHeight = document.getElementById("menu").offsetHeight;
const callSections = document.querySelectorAll(".menu-links")
console.log(callSections);
let navbarLinks = document.querySelectorAll("nav a");

const menuList = document.querySelector("#menu-list");
const menuHeaders = ["header","blog","subscribe","contact"];

function createList () {
  menuHeaders.forEach((header,index) => {
    const lists = document.createElement("li");
    const link = document.createElement("a");
    link.textContent = header;
    link.setAttribute("class", "links");
    link.setAttribute("href",`#${callSections[index].id}`);
    menuList.appendChild(lists);
    lists.appendChild(link);
    console.log(lists);
  });
}

createList();

//         <li><a href="#header" class="active">Home</a> </li>
//         <li><a href="#blog">Blog</a></li>
//         <li><a href="#subscribe">Subscribe</a></li>
//         <li><a href="#contact">Contact</a> --></li>

window.addEventListener("scroll", e => {
  scrollpos = window.scrollY;
  console.log(scrollpos);
  // navbarLinks.forEach(link => {
    // let section = document.querySelector(link.hash);
    if (scrollpos >= 100 ){ 
      console.log("Show menu!")
      menu.classList.add("active");
    } else {
      menu.classList.remove("active");
    }
  // });
});

callSections.forEach((section) => {
  window.addEventListener("scroll", () => {
    const bound = section.getBoundingClientRect();
    const menuId = section.getAttribute("id")
    const link = document.querySelector(`[href = "#${menuId}"]`);
    if (bound.top >= 0 && bound.top <= 100){ 
      // console.log("Show section!")
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  })
})

menu.addEventListener("click", (e) => {
  e.preventDefault();
  const targetLink = e.target;``
  const href = document.querySelector(targetLink.getAttribute("href"));
  href.scrollIntoView({behavior: "smooth"});
});
//read more about classList
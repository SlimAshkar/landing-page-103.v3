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

window.addEventListener("scroll", e => {
  scrollpos = window.scrollY;
  console.log(scrollpos);
    if (scrollpos >= 100 ){ 
      console.log("Show menu!")
      menu.classList.add("active");
    } else {
      menu.classList.remove("active");
    }
});

callSections.forEach((section) => {
  window.addEventListener("scroll", () => {
    const bound = section.getBoundingClientRect();
    const menuId = section.getAttribute("id")
    const link = document.querySelector(`[href = "#${menuId}"]`);
    if (bound.top >= 0 && bound.top <= 200){ 
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

const form = document.querySelector(".form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const success = document.createElement("p");
  success.textContent = "Thank you for SUBSCRIBING!";
  form.append(success);
  form.reset();
  setTimeout(() => {
    success.remove();

  }, 3000);
});

//read more about classList
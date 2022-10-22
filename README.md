# Udacity Landing Page

In This Landing Page Project I built a Navigation Bar that Dynamically floats using JavaScript DOM .

---

## Contents

- [Project Title](#Udacity-|-Landing-Page-Project)

- [Instructions](#instructions)

- [Installation](#installation)

- [Usage](#usage)

- [Development](#development)

- [License & Copyright](#License-&-Copyright)

---

## Instructions

[(Back to top)](#table-of-contents)

As a Started I used my Blog Page Project site HTML & CSS Styling, And built on it Dynamicly Floating Navigation Bar using JS and JS DOM.

---

## Installation

[(Back to top)](#table-of-contents)

There is Two ways install this project to your PC:

1. ZIP File to your PC using Git Clone the repo to your github account.
2. Clone it via GIT.

---

# Usage

[(Back to top)](#table-of-contents)

After you Successfuly installed it, you can use the project files (unzip) and open it with your favorite Local Machine Editor (Visual Studio Code / Atom / etc..)

---

# Development

#### The Project Contains:

- 10 CSS files
- 1 images directory (6 jpeg, 3 jpg)
  )
- 1 JS file
- 1 html file
- 1 fonts directory

#### css / src / styles

- styles.css
- aside.css
- basic.css
- blog.css
- blogpost.css
- footer.css
- form.css
- hero.css
- nav.css

#### index.html

#### js /

- app.js

#### README.md

##### Each file contains it's modifications and comment above each step of modify.

- In CSS files I used my Blog Project styles, and added one file called "nav.css" to style The Navigation Bar.

- In the HTML I didn't changed much, Created the Subscribe Form and added 2 more sections .

- Must of the work was done on app.js, using The DOM and functions.

        1. First of all I used The DOM and created some variables with document.getElementById & querySelectorAll Methods to get access to the relevant elements in the HTML file so I can manipulate them and add the NavBar.

        2. For NavBar I created createList () function that using forEach loop and other methods such document.createElement,setAttribute,textContent,appendChild .

        2. For Scroll Behavior I used an Arrow function with addEventListener method and if & else Statements with active class to make the scroll smoother and nicer between the sections.

        4. For each Section (callSections) is on the Viewport I used nested Arrow Functions executed with forEach loop, with the following Methods: addEventListener, getBoundingClientRect(),getAttribute,querySelector, and getBoundingClientRect, and if & else statements so the user will know which section is on, and also gives an active class to the Section link in the NavBar to be more clear which section being selected.

---

# License & Copyright

[(Back to top)](#table-of-contents)

**© Udacity - Modified By Slim Ashkar .**

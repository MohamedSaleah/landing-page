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
 * Define Global Variables
 *
*/

//selecting all sections in a variablec and calling it sections
const sections = document.querySelectorAll('section');
//creating a variable for the <ul>
const ita = document.getElementById('navbar__list');
//creating a brand new fragment and saving it in a variable
const diaa = document.createDocumentFragment();

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

//looping over all the sections
sections.forEach((section) => {
  //making a function to add the smooth scrolling inside it
  const ria = function smoothy (event){
    //we stopping the default from being excuted
    event.preventDefault()
    //adding the required behaviior to the section on scrollng to excute the behavior on the section
    section.scrollIntoView({behavior:'smooth'});
  };
//creaing a list element and saving it in a variable
  const jarr = document.createElement('li');
  //saving the attribute of the data nav with contains the name of the sections in a variable
  const astin = section.getAttribute('data-nav');
  //saving the attribute "id" which contains the sections links in a variable
  const liza = section.getAttribute("id");
  //creaing an anchor tag which contains the previous variables of the attribute (name and link) and adding it to the list variable
  jarr.innerHTML= `<a class="menu__link navbar__menu" href="#${liza}">${astin}</a>`;
//here we're adding an event listener to excute the smooth scrolling function on a click and adding it to the list variable
  jarr.addEventListener("click" ,ria );
//adding the  variable of the list inside of the variable of the fragment
  diaa.appendChild(jarr);

});
//finally we're adding the the fragment variable insied the ul variable so we add all the previous steps are inside the ul
ita.appendChild(diaa);



// Add class 'active' to section when near top of viewport

// here we're using the global variable which represents the window the script is running in to add an event listener on scrolling
window.addEventListener("scroll",
//creating a new function to indicate the action when scrolling
function irene(){
  // looping over the sections
  sections.forEach((section) => {
    //here we're setting the viewport
    // and  we're adding the conditon to add the active class when sections are intersecting and removing it when it's not
    if (section.getBoundingClientRect().top>=0 && section.getBoundingClientRect().top<700)
      {
      section.classList.add('your-active-class');
    }else{
      section.classList.remove('your-active-class');
    }

  });

});

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active

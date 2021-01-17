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
const sections = document.querySelectorAll('section');

const ulList = document.getElementById('navbar__list');

const fragment = document.createDocumentFragment();


// a loop for adding list items in the unordered list for the nav bar
// build the nav

for (const section of sections){

    const liElement = document.createElement('li');
    const anchorElement = document.createElement('a');
    const dataNav = section.getAttribute('data-nav');

    anchorElement.classList.add('menu__link');

    anchorElement.href = `#${section.id}`;
    
    anchorElement.textContent = dataNav;

    // adding smooth scrolling
    anchorElement.addEventListener('click',function(event){
        event.preventDefault();
        section.scrollIntoView({behavior:"smooth" , block : "center"});
    });

    liElement.appendChild(anchorElement);

    fragment.appendChild(liElement);


}

ulList.appendChild(fragment);



// Add class 'active' to section when near top of viewport

window.addEventListener('scroll',function(){

    // gets all sections in the current page.

    let sections = document.querySelectorAll('section');
   
    // loop for adding the highlighting background.

    for (const section of sections){

       const rect = section.getBoundingClientRect();

       if(rect.top > 0 && rect.top <= 250){

           section.classList.add('your-active-class');

       }else{

           section.classList.remove('your-active-class');

       }
   }

   //call function to highlight active link.
   setActiveLink();
});



    // gets all links related to the sections.
function setActiveLink() {

    const links = document.querySelectorAll('a');    
    const currentActiveSection = document.querySelector('.your-active-class');
        
        // loop for adding active link.
    if(currentActiveSection != null){
        for(link of links){
        
            const linkNavValue = link.textContent;
        
            if(currentActiveSection.getAttribute('data-nav') === linkNavValue){
            
                link.classList.add('your-active-class-link');
        
            }else{
            
                link.classList.remove('your-active-class-link');
            }
        }
    }
};
    



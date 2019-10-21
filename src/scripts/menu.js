const closed = 'hamburger_closed';
const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');
const anchors = document.querySelectorAll('a[href*="#"]');

function openHamburgerMenu(){
  document.body.style.overflow = 'hidden';
  hamburger.classList.add(closed);

}

function closeHamburgerMenu(){
  document.body.style.overflow = 'auto';
  hamburger.classList.remove(closed);
      

}

function isMenuOpened() {
  return hamburger.classList.contains(closed); 
 }

hamburger.addEventListener('click', function(e) {
  e.stopPropagation();
   if(isMenuOpened()){
          closeHamburgerMenu();
            
   } else{
      openHamburgerMenu();
      
   }
   
  });

  document.addEventListener('click', (event) => {
    const isClickInside = sidebar.contains(event.target);
    if (isMenuOpened() && !isClickInside) {
      closeHamburgerMenu();
    }
  });

  for (let anchor of anchors){
    anchor.addEventListener('click', closeHamburgerMenu);
  }
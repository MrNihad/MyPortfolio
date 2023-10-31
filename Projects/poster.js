
// select the navbar element
var navbar = document.querySelector('.topnav');

// get the current scroll position
var scrollPos = window.pageYOffset;



// add a scroll event listener
window.addEventListener('scroll', function() {
  // get the current scroll position
  var currentScrollPos = window.pageYOffset;

  // if the user is scrolling down and the navbar is not already hidden, hide it
  if (currentScrollPos > scrollPos && !navbar.classList.contains('hidden')) {
    navbar.classList.add('hidden');
  }
  // if the user is scrolling up and the navbar is hidden, show it
  else if (currentScrollPos < scrollPos && navbar.classList.contains('hidden')) {
    navbar.classList.remove('hidden');
  }

  // update the current scroll position
  scrollPos = currentScrollPos;
});
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
$(document).ready(function() {
    // required elements
    var imgPopup = $('.certificate-popup');
    var imgCont = $('.certificate-container__holder');
    var popupImage = $('.certificate-popup__img');
    var closeBtn = $('.close-btn');
    var prevBtn = $('.prev');
    var nextBtn = $('.next');
    var textContainer = $('.text');
  
    // initialize current image index and total number of images
    var currentIndex = 0;
    var totalImages = imgCont.length;
  
    // handle events
    imgCont.on('click', function() {
      // update current image index
      currentIndex = $(this).index();
      // update image displayed in popup
      var imgSrc = $(this).children('img').attr('src');
      imgPopup.children('img').attr('src', imgSrc);
      // update text displayed in popup
      var text = $(this).children('img').attr('data-text');
      textContainer.html(text);
      imgPopup.addClass('opened');
    });
  
    $(closeBtn).on('click', function() {
      imgPopup.removeClass('opened');
      imgPopup.children('img').attr('src', '');
      textContainer.html('');
    });
  
    popupImage.on('click', function(e) {
      e.stopPropagation();
    });// handle prev button click
    prevBtn.on('click', function() {
      // decrement current image index
      currentIndex--;
      // if index is less than 0, set it to the last image
      if (currentIndex < 0) {
        currentIndex = totalImages - 1;
      }
      // update image displayed in popup
      var imgSrc = imgCont.eq(currentIndex).children('img').attr('src');
      imgPopup.children('img').attr('src', imgSrc);
      // update text displayed in popup
      var text = imgCont.eq(currentIndex).children('img').attr('data-text');
      textContainer.html(text);
    });
    
    // handle next button click
    nextBtn.on('click', function() {
      // increment current image index
      currentIndex++;
      // if index is greater than or equal to total number of images, set it to the first image
      if (currentIndex >= totalImages) {
        currentIndex = 0;
      }
      // update image displayed in popup
      var imgSrc = imgCont.eq(currentIndex).children('img').attr('src');
      imgPopup.children('img').attr('src', imgSrc);
      // update text displayed in popup
      var text = imgCont.eq(currentIndex).children('img').attr('data-text');
      textContainer.html(text);
    });
    $(document).keydown(function(e) {
      if (e.keyCode == 27) { // 27 is the key code for the Esc key
        imgPopup.removeClass('opened');
        imgPopup.children('img').attr('src', '');
        textContainer.html('');
      }
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
  });
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
  
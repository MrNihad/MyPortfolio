$(document).ready(function() {

    // required elements
    var imgPopup = $('.img-popup');
    var imgCont  = $('.container__img-holder');
    var popupImage = $('.img-popup img');
    var closeBtn = $('.close-btn');
    var prevBtn = $('.prev');
    var nextBtn = $('.next');
  
    // initialize current image index and total number of images
    var currentIndex = 0;
    var totalImages = imgCont.length;
  
    // handle events
    imgCont.on('click', function() {
      // update current image index
      currentIndex = $(this).index();
      // update image displayed in popup
      var img_src = $(this).children('img').attr('src');
      imgPopup.children('img').attr('src', img_src);
      imgPopup.addClass('opened');
    });
  
    $(closeBtn).on('click', function() {
      imgPopup.removeClass('opened');
      imgPopup.children('img').attr('src', '');
    });
  
    popupImage.on('click', function(e) {
      e.stopPropagation();
    });
  
    // handle prev button click
    prevBtn.on('click', function() {
      // decrement current image index
      currentIndex--;
      // if index is less than 0, set it to the last image
      if (currentIndex < 0) {
        currentIndex = totalImages - 1;
      }
      // update image displayed in popup
      var img_src = imgCont.eq(currentIndex).children('img').attr('src');
      imgPopup.children('img').attr('src', img_src);
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
      var img_src = imgCont.eq(currentIndex).children('img').attr('src');
      imgPopup.children('img').attr('src', img_src);
    });
  });
  
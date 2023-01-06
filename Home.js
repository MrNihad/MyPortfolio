/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  // Log a message to the console to indicate that the function has been called
  console.log("myFunction called");

  // Select the topnav element
  var x = document.getElementById("myTopnav");

  // Log the value of the className property to the console before toggling the class
  console.log("className before toggle: " + x.className);

  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
  // Log the value of the className property to the console after toggling the class
  console.log("className after toggle: " + x.className);

}
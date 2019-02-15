var nameChecker = function(){
    var name = prompt("Please enter your name:");
    if (name === "") {
      var name = prompt("For real - enter your name:");
    } else {
    document.querySelector("h1").textContent = `Hello ${name}`;
   }

   nameChecker();
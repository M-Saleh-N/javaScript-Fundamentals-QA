//How can you prevent a form from submitting when a user clicks a submit button?


// Add an event listener to the submit button
const form = document.getElementById("myForm");
form.addEventListener("submit", function(event) {
    event.preventDefault(); 
    console.log("Form submission prevented!");
});


   


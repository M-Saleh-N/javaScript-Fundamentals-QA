//What does the addEventListener method do? Write an example.

//It attaches an event that can be added to a button for interactive elements

const button = document.getElementById("myButton");

button.addEventListener("click", function() {
    console.log("Button clicked!");
});


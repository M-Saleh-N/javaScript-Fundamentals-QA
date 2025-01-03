//Write a script to toggle the visibility of a paragraph when a button is clicked

<script>
const paragraph = document.getElementById("myParagraph");
const button = document.getElementById("toggleButton");

button.addEventListener("click", function() {
    paragraph.style.display = paragraph.style.display === "none" ? "block" : "none";
});
</script>
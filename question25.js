//Write a script to change the background color of a webpage when a button is clicked.


<script>
    function changeBackground() {
        document.body.style.backgroundColor = "blue"
        }
    
    document.getElementById("colorButton").addEventListener("click", changeBackground);
    
    <button id="colorButton">Change Background</button>
</script>





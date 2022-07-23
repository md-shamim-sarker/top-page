function getInputValue() {
    // Selecting the input element and get its value 
    var inputVal = document.getElementById("nameInput").value;

    // Displaying the value
    document.getElementById('name').innerHTML = inputVal;
}
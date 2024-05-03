// necessary elements from the DOM
const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
generateBtn = wrapper.querySelector(".form button"),
qrImg = wrapper.querySelector(".qr-code img");

// Declaring a variable to store the previous value of the QR input
let preValue;

// Adding an event listener to the generate button for click event
generateBtn.addEventListener("click", () => {
    // Retrieving the trimmed value of the QR input
    let qrValue = qrInput.value.trim();
    // Checking if the input value is empty or if it's the same as the previous value
    if(!qrValue || preValue === qrValue) return;
    // Storing the current value in preValue to track changes
    preValue = qrValue;
    // Changing the text of the generate button to indicate QR code generation is in progress
    generateBtn.innerText = "Generating QR Code...";
    // Setting the source of the QR image to a URL with the QR data
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    // Adding an event listener to the QR image load event
    qrImg.addEventListener("load", () => {
        // Adding the 'active' class to the wrapper to display the QR image
        wrapper.classList.add("active");
        // Resetting the text of the generate button after QR generation is complete
        generateBtn.innerText = "Generate QR Code";
    });
});

// Adding an event listener to the QR input for keyup event
qrInput.addEventListener("keyup", () => {
    // Checking if the input value is empty after trimming
    if(!qrInput.value.trim()) {
        // Removing the 'active' class from the wrapper to hide the QR image
        wrapper.classList.remove("active");
        // Resetting the preValue variable since input is empty
        preValue = "";
    }
});

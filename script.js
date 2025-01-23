function generateQr() {
    // Get the input value
    const inputText = document.querySelector('input').value;

    // Check if the input text is not empty
    if(inputText.trim() !== "") {
        // Create a new QR code element inside the div with class 'qrcode'
        document.querySelector('.qrcode').innerHTML = "";
        new QRCode(document.querySelector('.qrcode'), inputText);
    } else {
        // Clear the QR code if the input is empty
        document.querySelector('.qrcode').innerHTML = "";
    }
}

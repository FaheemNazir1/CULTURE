// script.js

// Select all buttons in the card elements
const buttons = document.querySelectorAll('.card button');

// Add a click event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Get the state name from the card's heading
        const stateName = button.parentElement.parentElement.querySelector('h3').innerText;
        
        // Alert the user with a message about the state
        alert(`You clicked on "${stateName}". More information coming soon!`);
    });
});

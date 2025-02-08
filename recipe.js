// Get all dropdown buttons
const dropdownBtns = document.querySelectorAll('.dropdown-btn');

// Add event listener to each dropdown button
dropdownBtns.forEach(button => {
    button.addEventListener('click', function() {
        // Get the next sibling of the button (the dropdown-content div)
        const dropdownContent = this.nextElementSibling;
        
        // Toggle the "active" class to show or hide the dropdown content
        dropdownContent.classList.toggle('active');
        
        // Optionally, toggle the rotation of the arrow
        const arrow = this.querySelector('.arrow');
        arrow.classList.toggle('rotate');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const dropdownButtons = document.querySelectorAll(".dropdown-btn");

    dropdownButtons.forEach(button => {
        button.addEventListener("click", function() {
            const parent = this.parentElement;
            parent.classList.toggle("active");
        });
    });
});

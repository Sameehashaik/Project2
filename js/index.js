document.addEventListener("DOMContentLoaded", function() {
    // When the DOM content is fully loaded, execute this function
    
    // Get references to the menu icon and the mobile menu
    const menuIcon = document.getElementById("menu_icon");
    const mobileMenu = document.getElementById("mobile_menu");

    // Toggle the visibility of the mobile menu when the menu icon is clicked
    menuIcon.addEventListener("click", function() {
        // Toggle the "show" class on the mobile menu
        mobileMenu.classList.toggle("show");
    });
});

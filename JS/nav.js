
const sidebar = document.getElementById('sidebar')



function toggleSubMenu(button) {

    // Find the dropdown containing the clicked button
    const dropdown = button.closest(".dropdown");

    // Find its submenu
    const submenu = dropdown.querySelector(".sub-menu");

    // Toggle the submenu visibility
    const isOpen = submenu.classList.toggle("show");

    // Rotate the dropdown arrow
    button.classList.toggle("rotate", isOpen);
}


function closeAllSubMenus(){
  Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
    ul.classList.remove('show')
    ul.previousElementSibling.classList.remove('rotate')
  })
}
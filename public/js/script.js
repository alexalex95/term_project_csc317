// Function to toggle the sidebar menu
function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    const isOpen = sidebar.classList.contains('visible');

    if (isOpen) {
        sidebar.classList.remove('visible');
    } else {
        sidebar.classList.add('visible');
    }
}


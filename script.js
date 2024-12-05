// Function to toggle the sidebar menu
function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    // Check if the sidebar is currently visible
    if (sidebar.style.left === '0px') {
        // Hide the sidebar
        sidebar.style.left = '-250px';
    } else {
        // Show the sidebar
        sidebar.style.left = '0px';
    }
}



document.querySelector('.menu-bar i').addEventListener('click', function (e) {
    const nav = document.querySelector('header nav');
    nav.classList.toggle('show');
    e.stopPropagation(); // Prevent click event from bubbling up
});

// Close the menu if clicked outside
document.addEventListener('click', function (e) {
    const nav = document.querySelector('header nav');
    const menuBar = document.querySelector('.menu-bar');
    
    if (!menuBar.contains(e.target) && !nav.contains(e.target)) {
        nav.classList.remove('show');
    }
});

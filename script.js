
    // Toggle mobile menu
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuBackdrop = document.getElementById('mobile-menu-backdrop');
    const mobileMenuClose = document.getElementById('mobile-menu-close');

    mobileMenuButton.addEventListener('click', function() {
        mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
        mobileMenuBackdrop.style.display = mobileMenuBackdrop.style.display === 'block' ? 'none' : 'block';
    });

    mobileMenuClose.addEventListener('click', function() {
        mobileMenu.style.display = 'none';
        mobileMenuBackdrop.style.display = 'none';
    });
document.addEventListener('DOMContentLoaded', function () {
    const navbars = document.querySelectorAll('.navbar');

    navbars.forEach(function (navbar, index) {
        const container = navbar.querySelector('.nav-container') || navbar;
        const brand =
            container.querySelector('.nav-brand') ||
            container.querySelector('.nav-left') ||
            container.querySelector('.brand') ||
            container.firstElementChild;

        if (!brand || container.querySelector('.mobile-nav-toggle')) {
            return;
        }

        const toggle = document.createElement('button');
        toggle.type = 'button';
        toggle.className = 'mobile-nav-toggle';
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open navigation menu');
        toggle.setAttribute('aria-controls', 'mobile-menu-' + index);
        toggle.innerHTML = '<span></span>';

        const menuGroups = Array.from(
            container.querySelectorAll('.nav-links, .nav-center, .nav-actions, .nav-right')
        );

        if (menuGroups[0]) {
            menuGroups[0].id = menuGroups[0].id || 'mobile-menu-' + index;
        }

        toggle.addEventListener('click', function () {
            const isOpen = navbar.classList.toggle('is-open');
            toggle.setAttribute('aria-expanded', String(isOpen));
            toggle.setAttribute(
                'aria-label',
                isOpen ? 'Close navigation menu' : 'Open navigation menu'
            );
        });

        const closeMenu = function () {
            navbar.classList.remove('is-open');
            toggle.setAttribute('aria-expanded', 'false');
            toggle.setAttribute('aria-label', 'Open navigation menu');
        };

        menuGroups.forEach(function (group) {
            group.querySelectorAll('a, button').forEach(function (item) {
                item.addEventListener('click', function () {
                    if (window.innerWidth <= 767) {
                        closeMenu();
                    }
                });
            });
        });

        window.addEventListener('resize', function () {
            if (window.innerWidth > 767) {
                closeMenu();
            }
        });

        container.appendChild(toggle);
    });
});

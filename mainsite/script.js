document.addEventListener('DOMContentLoaded', () => {
    const links = Array.from(document.querySelectorAll('.sidebar a'));

    links.forEach((link) => {
        link.addEventListener('click', (event) => {
            const target = link.getAttribute('data-link') || link.getAttribute('href');

            if (target && target !== '#') {
                event.preventDefault();
                window.location.href = target;
            }

            links.forEach((item) => item.classList.remove('is-active'));
            link.classList.add('is-active');
        });
    });
});

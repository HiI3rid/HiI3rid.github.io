document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const button = dropdown.querySelector('.dropbtn');
        const content = dropdown.querySelector('.dropdown-content');

        button.addEventListener('click', () => {
            const isActive = content.style.display === 'block';

            dropdowns.forEach(d => {
                const c = d.querySelector('.dropdown-content');
                if (d !== dropdown) {
                    c.style.display = 'none';
                }
            });

            content.style.display = isActive ? 'none' : 'block';
        });
    });
});

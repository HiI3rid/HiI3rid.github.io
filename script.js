document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const button = dropdown.querySelector('.dropbtn');
        const content = dropdown.querySelector('.dropdown-content');

        button.addEventListener('click', () => {
            const isActive = content.style.display === 'block';

            // Close all dropdowns
            dropdowns.forEach(d => {
                const c = d.querySelector('.dropdown-content');
                if (c !== content) {
                    c.style.display = 'none';
                }
            });

            // Toggle the clicked dropdown
            content.style.display = isActive ? 'none' : 'block';
        });
    });
});

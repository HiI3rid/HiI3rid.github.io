document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown-content');
    const buttons = document.querySelectorAll('.dropbtn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const isVisible = button.nextElementSibling.style.display === 'block';

            // Elrejti az összes dropdown tartalmat
            dropdowns.forEach(dropdown => {
                dropdown.style.display = 'none';
            });

            // Ha nem látható, mutassa az aktuálisat
            if (!isVisible) {
                button.nextElementSibling.style.display = 'block';
            }
        });
    });
});

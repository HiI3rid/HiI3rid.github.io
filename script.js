document.addEventListener('DOMContentLoaded', function() {
    const modals = document.querySelectorAll('.modal');
    const modalBtns = document.querySelectorAll('.modal-btn');
    const closeBtns = document.querySelectorAll('.close-btn');

    // Modális ablakok megnyitása
    modalBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const modalId = btn.getAttribute('data-modal');
            document.getElementById(modalId).style.display = 'block';
        });
    });

    // Modális ablakok bezárása a bezáró gombbal
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const modalId = btn.getAttribute('data-modal');
            document.getElementById(modalId).style.display = 'none';
        });
    });

    // Modális ablakok bezárása kattintásra kívülről
    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });

    // Esc billentyű lenyomására is bezárás
    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            modals.forEach(modal => {
                if (modal.style.display === 'block') {
                    modal.style.display = 'none';
                }
            });
        }
    });
});

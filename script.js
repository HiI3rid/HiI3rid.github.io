document.addEventListener('DOMContentLoaded', () => {
    const services = document.querySelectorAll('.service');
    let activeDropdown = null;

    services.forEach(service => {
        const header = service.querySelector('.service-header');
        const dropdownContent = service.querySelector('.dropdown-content');

        header.addEventListener('click', () => {
            if (activeDropdown && activeDropdown !== dropdownContent) {
                activeDropdown.style.maxHeight = null;
                activeDropdown.style.opacity = 0;
                activeDropdown.classList.remove('active');
            }

            if (dropdownContent.style.maxHeight) {
                dropdownContent.style.maxHeight = null;
                dropdownContent.style.opacity = 0;
                dropdownContent.classList.remove('active');
                activeDropdown = null;
            } else {
                dropdownContent.style.maxHeight = dropdownContent.scrollHeight + "px";
                dropdownContent.style.opacity = 1;
                dropdownContent.classList.add('active');
                activeDropdown = dropdownContent;
            }
        });
    });
});

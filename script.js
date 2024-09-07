// Szolgáltatás részletek megjelenítése
document.querySelectorAll('.service-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const details = button.nextElementSibling;

        // Az összes többi részlet bezárása
        document.querySelectorAll('.service-details').forEach(detail => {
            if (detail !== details) {
                detail.style.display = 'none';
            }
        });

        // Aktuális részlet megjelenítése vagy elrejtése
        if (details.style.display === 'block') {
            details.style.display = 'none';
        } else {
            details.style.display = 'block';
        }
    });
});

// Google térkép inicializálása
function initMap() {
    var mapOptions = {
        center: { lat: 46.253, lng: 20.145 },
        zoom: 15
    };
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    
    var marker = new google.maps.Marker({
        position: { lat: 46.253, lng: 20.145 },
        map: map,
        title: 'Szeged, Agyagos utca 3'
    });
}

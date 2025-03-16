// Arama Çubuğu İşlevi
document.getElementById('search-bar').addEventListener('input', function(e) {
    let query = e.target.value.toLowerCase();
    let services = document.querySelectorAll('.service-item');
    services.forEach(function(service) {
        let serviceName = service.textContent.toLowerCase();
        if (serviceName.includes(query)) {
            service.style.display = 'block';
        } else {
            service.style.display = 'none';
        }
    });
});

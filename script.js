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

// Ziyaretçi Verilerini Güncelleme
function updateVisitorData() {
    // data.json dosyasını okuma işlemi
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            // Ziyaretçi sayısını güncelleme
            data.totalVisitors++; // Toplam ziyaretçi sayısını artır
            data.currentVisitors++; // Aktif ziyaretçi sayısını artır
            if (window.location.pathname === '/service-page') { // Eğer ziyaretçi hizmet sayfasına geldiyse
                data.servicePageVisitors++; // Hizmet sayfası ziyaretçi sayısını artır
            }

            // Güncellenmiş veriyi JSON dosyasına yazmak için bir API çağrısı yapmak gerekir
            // Ancak, frontend üzerinden doğrudan JSON dosyasına yazmak mümkün olmadığından, backend tarafında bir API kullanmak gerekecek.
            console.log('Updated Data:', data);  // Güncellenmiş veriyi görmek için konsola yazdırabiliriz.

            // Bu verileri güncelledikten sonra, frontend'deki verileri kullanıcıya göstermek gerekebilir.
            // Burada JSON dosyasını güncellemek için backend API kullanılabilir.
        })
        .catch(error => console.log("Hata: ", error));
}

// Bu fonksiyonu sayfa her yüklendiğinde çağır
window.onload = updateVisitorData;

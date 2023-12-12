$(document).ready(function(){
    $('#kiprah-mahasiswa-slider').owlCarousel({
        loop: true,
        nav: true,
        items : 3,
        dots : false,
        margin: 30,
        navText: [
            "<i class='fas fa-angle-left'></i>", // Corrected
            "<i class='fas fa-angle-right'></i>" // Corrected
        ],
        navContainer : "#hero-area-nav"
    });
    
});

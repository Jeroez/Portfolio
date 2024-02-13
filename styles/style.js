document.addEventListener('DOMContentLoaded', function() {
    var navbar= document.getElementById('navbar');
    var homeSection = document.getElementById('Home');

    window.addEventListener('scroll', function() {
        var scrollPosition = window.scrollY;
        var homeSectionHeight = homeSection.offsetHeight;

        if (scrollPosition > homeSectionHeight * 1) {
            navbar.style.display = 'block';
        } else {
            navbar.style.display = 'none';
        }
    });
});
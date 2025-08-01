function loadHTML(id, url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        });
}

window.addEventListener('DOMContentLoaded', function() {
    loadHTML('header-placeholder', 'Header.html');
    loadHTML('footer-placeholder', 'Footer.html');
});
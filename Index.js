// Function to load external HTML (header or footer) into a placeholder div by ID
function loadHTML(id, url) {
    fetch(url) // Fetch the HTML file (e.g., Header.html or Footer.html)
        .then(response => response.text()) // Convert the response to text
        .then(data => {
            document.getElementById(id).innerHTML = data; // Insert the HTML into the target div
        });
}

// When the DOM is fully loaded, insert the header and footer
window.addEventListener('DOMContentLoaded', function() {
    loadHTML('header-placeholder', 'Header.html'); // Load header into #header-placeholder
    loadHTML('footer-placeholder', 'Footer.html'); // Load footer into #footer-placeholder
});
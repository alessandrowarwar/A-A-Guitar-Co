    console.log("=== DEBUG MODE DETECTION ===");
    var match = document.cookie.match(/(?:^|;\s*)mode=(darkMode|lightMode)/);
    var mode = match ? match[1] : "lightMode";
    console.log("Cookie mode found:", mode);

    function setModeClass() {
        if (document.body) {
            console.log("Body classes before:", document.body.className);
            if (!document.body.classList.contains(mode)) {
                document.body.classList.add(mode);
                console.log("Added mode class:", mode);
            }
            console.log("Body classes after:", document.body.className);

            // Set icons and logos based on mode
            setTimeout(function () {
                const CompanyLogo = document.querySelector('.navbar-brand img');
                const iconImg = document.querySelector('.changeScreenModeIcon img');

                if (mode === 'darkMode') {
                    if (iconImg) iconImg.src = 'lightModeIcon.png';
                    if (CompanyLogo) CompanyLogo.src = 'CompanyLogoDark.png';
                } else {
                    if (iconImg) iconImg.src = 'darkModeIcon.png';
                    if (CompanyLogo) CompanyLogo.src = 'CompanyLogo.png';
                }
            }, 100);

        } else {
            console.log("Body not ready, retrying...");
            setTimeout(setModeClass, 1);
        }
    }
    setModeClass();

    document.addEventListener('DOMContentLoaded', function () {

        const blogList = document.getElementById('blog-list');

        fetch('posts.json')
            .then(response => response.json())
            .then(posts => {
                posts.forEach(post => {
                    const postElement = document.createElement('article');
                    postElement.className = 'blog-post';

                    // Create and populate the post content
                    postElement.innerHTML = `
                        <h2 class="blog-post-title">${post.title}</h2>
                        <div class="blog-post-meta">
                            <span>Published on ${new Date(post.date).toLocaleDateString('en-US', { 
                                year: 'numeric', 
                                month: 'long', 
                                day: 'numeric' 
                            })}</span> • 
                            <span>By ${post.author}</span> • 
                            <span>${post.category}</span>
                        </div>
                        <div class="blog-post-content">
                            ${post.content}
                            <a href="#" class="read-more">Read Full Article</a>
                        </div>
                    `;

                    // Add postElement as a child to blog list
                    blogList.appendChild(postElement);
                });
            })
            .catch(error => console.error('Error loading blog posts:', error));

    });

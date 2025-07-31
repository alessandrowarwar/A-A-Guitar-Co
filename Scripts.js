document.addEventListener('DOMContentLoaded', function() {

    const blogList = document.getElementById('blog-list');
    
    fetch('../data/posts.json')
        
    .then(response => response.json())
        
    .then(posts => {
            
        posts.forEach(post => {
                
            const postElement = document.createElement('div');

            // manipulate postElement to show the content of the blog post with the specific style defined for it

            //add postElement as a child to blog list

        });

    })

    .catch(error => console.error('Error loading blog posts:', error));

});
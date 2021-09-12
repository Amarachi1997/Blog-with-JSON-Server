const blogData = document.querySelector(".blogPosts")

const renderPosts = async () => {
    let uri = 'http://localhost:3000/posts?_sort=likes&_order=desc';

    const res = await fetch(uri);

    const posts = await res.json();

    console.log(posts)

    let postTemplate = '';

    posts.forEach(post => {
        postTemplate += `
            <div class="post">
                <h2>${post.title}</h2>
                <p><small>${post.likes} likes</small></p>
                <p> ${post.body.slice(0, 150)}... </p>
                <a href="/details.html?id=${post.id}"> read more... </a>
            </div>
        `
    });

    blogData.innerHTML = postTemplate;

   
}

window.addEventListener('DOMContentLoaded', () => renderPosts());

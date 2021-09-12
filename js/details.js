const id = new URLSearchParams(window.location.search).get('id');

const singlePost = document.querySelector('.post-content');


const renderDetails = async () =>{
    const res = await fetch('http://localhost:3000/posts/' + id);

    const post = await res.json();

    console.log(post);

    const postTemplate = `
        <h1>${post.title} </h1>
        <p>${post.body}</p>
        <br>
        <a href="/index.html"> back to home </a>
    `


    singlePost.innerHTML = postTemplate;
}


window.addEventListener('DOMContentLoaded', () => renderDetails());
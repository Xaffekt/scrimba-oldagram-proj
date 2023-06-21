const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let postsEl = document.getElementById("posts-el")
function render()
{
    postsEl.innerHTML = ""
    for(let i=0; i < posts.length;i++)
    {
        postsEl.innerHTML += renderPost(posts[i])
    }
}

render();

function renderPost(currentPost)
{

    console.log(currentPost.name)

    let postHtml = `
    <section class="container post-container">
        <div class="post-info">
            <img class="profile-img" src="${currentPost.avatar}" alt="${currentPost.username} profile image">
            <div class="block-text">
                <span class="bold-text">${currentPost.name}</span>
                <span>${currentPost.location}</span>
            </div>
        </div>
        <img class="post-img" src="${currentPost.post}" alt="painted portrait of ${currentPost.name}">
        <div class="post-content">
            <div class="post-icons">
                <img src="images/icon-heart.png" alt="heart icon to like post">
                <img src="images/icon-comment.png" alt="speach bubble to comment on post">
                <img src="images/icon-dm.png" alt="paper plane icon to dm">
            </div>
            <h3 class="bold-text">${currentPost.likes} likes</h3>
            <span class="bold-text">${currentPost.username}</span>
            <span>${currentPost.comment}</span>
        </div>
    </section>`

    return postHtml
}


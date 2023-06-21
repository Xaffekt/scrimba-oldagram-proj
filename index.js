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

function render() //allows the render of any posts added to the posts array 
{
    postsEl.innerHTML = ""
    let postContent = ""
    
    for(let i=0; i < posts.length;i++)
    {
        postContent += renderPost(posts[i])
    }
    postsEl.innerHTML = postContent
}

//unsure if this was the best way to render out the posts but im really happy that it even worked lol
render(); 

function renderPost(currentPost) //adds html for the current post rendering from posts array
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
                <button class="icon-img" id="heart" title="heart icon"></button>
                <button class="icon-img" id="comment" title="comment icon"></button>
                <button class="icon-img" id="dm" title="direct message icon"></button>
            </div>
            <h3 class="bold-text">${currentPost.likes} likes</h3>
            <span class="bold-text">${currentPost.username}</span>
            <span>${currentPost.comment}</span>
        </div>
    </section>`

    return postHtml
}


//This function works to simulate liking the image, 
//however it breaks the hover state so i opted to not use it

// let isLiked = false;
// function heartClick()
// {
//     if(isLiked === false)
//     {
//         document.getElementById("heart").style.backgroundImage = "url('images/icon-heart-active.png')"
//         isLiked = true
//         console.log(isLiked)
//     }
//     else
//     {
//         document.getElementById("heart").style.backgroundImage = "url('images/icon-heart.png')"
//         isLiked = false
//         console.log(isLiked)
//     }

// }


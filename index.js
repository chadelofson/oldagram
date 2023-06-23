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

const postsEl = document.getElementById("posts")

function renderPosts() {
    for (let i = 0; i < posts.length; i++) {
        const currentPost = posts[i]
        postsEl.append(render(currentPost))
    }
}

function render(post) {
    const postEl = document.createElement("div")
    postEl.classList.add("post")
    postEl.classList.add("white-bg")
    
    postEl.append(createUserDetailEl(post), createPostPicEl(post), createPostDetailsEl(post))
    
    return postEl 
}

function createUserDetailEl(post) {
    const userDetailEl = document.createElement("section")
    userDetailEl.classList.add("user-details")
    
    userDetailEl.append(createAvatarImg(post), createUserInfoEl(post))
    
    return userDetailEl
}

function createAvatarImg(post) {
    const avatarImgEl = document.createElement("img")
    avatarImgEl.classList.add("avatar")
    avatarImgEl.src = post.avatar
    avatarImgEl.alt = "Avatar Image"
    return avatarImgEl    
}

function createUserInfoEl(post) {
    const userInfoEl = document.createElement("p")
    userInfoEl.innerHTML = `${post.name} <span class="block thin-text">${post.location}</span>`   
    return userInfoEl
}

function createPostPicEl(post) {
    const postPicEl = document.createElement("img")
    postPicEl.classList.add("post-image")
    postPicEl.src = post.post
    postPicEl.alt = "Post Picture"
    return postPicEl
}

function createPostDetailsEl(post) {
    const postDetailsEl = document.createElement("section")
    postDetailsEl.classList.add("post-details")
    postDetailsEl.classList.add("white-bg")
    
    const likesEl = createLikesEl(post)
    
    postDetailsEl.append(createIconsEl(post, likesEl), likesEl, createCommentEl(post))
    
    return postDetailsEl
}

function createIconsEl(post, likesEl) {
    const iconsEl = document.createElement("p")
    iconsEl.classList.add("icons")
    // Like Button
    const likeBtnEl = createBtnEl("images/icon-heart.png", "heart", "Like Button", "Like")
    likeBtnEl.addEventListener("dblclick", function () {
        post.likes++
        likesEl.textContent = `${post.likes} likes`
    })
    
    const msgBtnEl = createBtnEl("images/icon-dm.png", "dm", "Direct Message Button", "Message")
    
    const commentBtnEl = createBtnEl("images/icon-comment.png", "comment", "Comment Button", "Comment")
    
    iconsEl.append(likeBtnEl, msgBtnEl, commentBtnEl)
    
    return iconsEl
}

function createBtnEl(imgSrc, className, alt, ariaLabel) {
    const btnEl = document.createElement("button")
    btnEl.ariaLabel = ariaLabel
    btnEl.classList.add("icon")
    btnEl.classList.add(className)
    
    btnImgEl = document.createElement("img")
    btnImgEl.classList.add("icon")
    btnImgEl.src = imgSrc
    btnImgEl.alt = alt
    
    btnEl.append(btnImgEl)
    
    return btnEl
}

function createLikesEl(post) {
    const likesEl = document.createElement("p")
    likesEl.textContent = `${post.likes} likes`
    return likesEl    
}

function createCommentEl(post) {
    const commentEl = document.createElement("p")
    commentEl.innerHTML = `${post.username} <span class="thin-text">${post.comment}`
    return commentEl
}

renderPosts()

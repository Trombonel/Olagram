import posts from '/data.js'  
import { v4 as uuidv4 } from 'https://jspm.dev/uuid'


document.addEventListener('click', function(e){
    if(e.target.dataset.like){
       handleLikeClick(e.target.dataset.like) 
    }
})

function handleLikeClick(postId){ 
    const targetpost = posts.filter(function(post){
        return post.uuid === postId
         })[0]

    if (targetpost.isLiked){
        targetpost.likes--
    }
    else{
        targetpost.likes++ 
    }
    targetpost.isLiked = !targetpost.isLiked
    render()
}

function getFeedHtml(){
    let feedHtml = ''
    
posts.forEach(function(post) {
    
    let likeIconClass = ''
        
        if (post.isLiked){
            likeIconClass = 'liked'
        }
    
 feedHtml += `
<section>
    <div id="section-header">
        <img id="avatar" src=${post.avatar} alt="avatar-vangogh">
        <div class="section-header-description">
            <h2 id="name">${post.name}</h2>
            <p id="location">${post.location}</p>
        </div>
    </div>
    <img id="post" src="${post.post}" alt="portrait vangogh">
    <div class="section-footer">
        <img id="heart" class="icons ${likeIconClass}" src="images/icon-heart.png" 
        data-like="${post.uuid}">
        <img class="icons"  src="images/icon-comment.png">
        <img class="icons"  src="images/icon-dm.png">
        <h2 id="likes">${post.likes} likes</h2>
        <h2 id="username">${post.username}</h2>
        <p id="comment">${post.comment}</span></p>
    </div>
</section>
 `  
    })
    return feedHtml
}


function render() {
    document.getElementById('main').innerHTML = getFeedHtml()
}

render()
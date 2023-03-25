// Create the Dog class here
class Dog {
    constructor(data) {
        Object.assign(this, data)
    }
    
    getTinDogHtml(data) {
    const {avatar, name, age, bio} = this
    return `<div class="info-container">
                <img class="avatar" src="${avatar}">
                <img id="like-badge" class="badge-style likeIsHidden" src="images/badge-like.png">
                <img id="nope-badge" class="badge-style nopeIsHidden" src="images/badge-nope.png">
                <div class="dog-profile-info">
                    <h3 class="nameAge">${name}, ${age}</h3>
                    <h4 class="bio">${bio}</h4>
                </div>
            </div>`
    }
}

export default Dog
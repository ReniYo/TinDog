// Remember to import the data and Dog class!

import dogs from '/data.js'
import Dog from '/Dog.js'

document.addEventListener("click", function(e) {
    if(!dog.hasBeenSwiped){
        if(e.target.id === "nope-btn") {
            document.getElementById("nope-badge").classList.remove("nopeIsHidden")   
        }else if(e.target.id === "like-btn"){
            dog.hasBeenLiked = true
                document.getElementById("like-badge").classList.remove("likeIsHidden")
        }
        setNextDog()
    }   
})

function getNewDog() {
    const nextDogData = dogs.shift()
    return nextDogData ? new Dog(nextDogData) : {}
}

function setNextDog(){
    if(dogs.length > 0) {
        dog.hasBeenSwiped = true
        setTimeout(()=>{
            dog = getNewDog()
            render()
            dog.hasBeenSwiped = false
            dog.hasBeenLiked = false
        },1500)
    }else{
        dog.hasBeenSwiped = true
        endMessage()
    }
}

function endMessage() {
    setTimeout(function(){
        document.getElementById("tin-dog").innerHTML = 
        `<h2 class="end-message">No more TinDogs for now. <br>Try again later.</br></h2>`
    },1500)
}
              
function render() {
    document.getElementById("tin-dog").innerHTML = dog.getTinDogHtml()
}

let dog = getNewDog()
render()


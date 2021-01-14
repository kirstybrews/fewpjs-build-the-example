// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", () => {
  getLikes()
})

function getLikes() {
  likes = document.querySelectorAll('.like-glyph')
  likes.forEach(function(like) {
    likeEvent(like)
  })
}

function likeEvent(like) {
  like.addEventListener('click', () => {
    mimicServerCall()
      .then(() => {
        if (like.className == "like-glyph") {
          likePost(like)
        } else {
          unlikePost(like)
        }
        // console.log(like.innerText)
        // like.innerText = FULL_HEART
        // like.className = "activated-heart"
      })
      .catch(error => {
        error = document.querySelector('#modal')
        error.className = ""
        setTimeout(function() {
          error.className = "hidden"
        }, 5000)
      })
  })
}

function likePost(like) {
  like.innerText = FULL_HEART
  like.className = "activated-heart"
}

function unlikePost(like) {
  like.innerText = EMPTY_HEART
  like.className = "like-glyph"
}

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

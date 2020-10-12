// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
console.log("hi")
let like = document.getElementsByClassName('like-glyph')
console.log(like)
Array.from(like).forEach(plike => plike.addEventListener("click", function(e) {
  // console.log(e.target)
  toggleLike(e.target)
}
))
function toggleLike(e) {
     if (e.innerText === EMPTY_HEART) {
       e.innerText = FULL_HEART
       e.className = 'activated-heart'
     } else {
       e.innerText = EMPTY_HEART
       e.className = 'like-glyph'
     }
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

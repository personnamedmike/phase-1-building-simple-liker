// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!
const modal = document.querySelector("#modal");
modal.classList.add("hidden");

const heart = document.querySelector(".like-glyph");

heart.addEventListener("click", (e) => {
  // e.preventDefault();
  mimicServerCall()
    .then((response) => {
      console.log(response);
      heart.classList.add("activated-heart");
      if (heart.classList.contains("activated-heart")) {
        heart.addEventListener("click", () => {
          heart.classList.remove("activated-heart");
        });
      }
    })
    .catch((error) => {
      modal.classList.remove("hidden");
      modal.textContent = error;
      setTimeout(function () {
        modal.classList.add("hidden");
      }, 3000);
    });
});

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

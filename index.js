// validate email and phone number
document
  .getElementById("info-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const phoneNum = document.getElementById("phone-number").value;

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      alert("Invalid email address");
      return false;
    }
    
    if (
      !phoneNum.match(
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
      )
    ) {
      alert("Invalid phone number");
      return false;
    }
    document.getElementById("info-form").reset();
  });

const video = document.getElementById("myVideo");
const btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

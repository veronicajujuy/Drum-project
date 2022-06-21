var buttons = document.querySelectorAll(".drum")


buttons.forEach(e => e.addEventListener("click", function (){
   console.log(this.innerHTML)
   this.style.color = "white"
}))

// var audio = new Audio("sounds/crash.mp3")
//     audio.play()
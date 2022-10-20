var play = document.getElementById("play")
var mySong = document.getElementById("mysong")
var text = document.getElementById("text")

// console.log(play)
// console.log(mySong)

play.addEventListener("click", () => {
    const notPlaying = mySong.classList.contains("pause");

    if(notPlaying) {
        mySong.play();
        mySong.classList.remove("pause")
    }else {
        mySong.pause();
        mySong.classList.add("pause")
    }

    
})

function gotoLink(link){
    console.log(link.value);
    location.href = "http://127.0.0.1:5500/about.html";
}

function myLink(link){
    console.log(link.value);
    location.href = "http://127.0.0.1:5500/projects.html";
}

// function gotoLink(link){
//     console.log(link.value);
//     location.href = "http://127.0.0.1:5500/projects.html";
// }

// text.addEventListener("click", myText);

// function myText(link){
//     location.href = "http://127.0.0.1:5500/projects.html";
// }


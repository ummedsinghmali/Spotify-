let playButtonEl = document.querySelector(".play-images");
let pausedButtonEl = document.querySelector(".paused-images");
let playNextbuttonEl = document.querySelector(".backword-images");
let playBackButtonEl = document.querySelector(".forword-images");
let nextBgImgEl = document.querySelector("#greatersymbol");
let backToBgImgEl = document.querySelector("#lesssymbol");
let backgroundEl = document.querySelector(".subbody-container");
let btn2El = document.querySelector("#btn2");
let btn3El = document.querySelector("#btn3");
let btn4El = document.querySelector("#btn4");
let btn5El = document.querySelector("#btn5");
let btn6El = document.querySelector("#btn6");
let artistOptionsEl = document.querySelector("#artistoption");
let playlistsOptionsEl = document.querySelector("#playlistsoption");
let trendingOptionsEl = document.querySelector("#Trendingoption");

let audioCollection = [
  "file:///C:/Users/ummed%20singh%20mali/Downloads/Raataan%20Lambiyan%20(From%20_Shershaah_).mp3",
  "file:///C:/Users/ummed%20singh%20mali/Desktop/spotify/Kesariya%20-%20Brahm%C4%81stra%20%20Ranbir%20Kapoor%20%20Alia%20Bhatt%20%20Pritam%20%20Arijit%20Singh%20%20Amitabh%20Bhattacharya%20(1).mp3 ",
  "file:///C:/Users/ummed%20singh%20mali/Desktop/spotify/y2mate.com%20-%20Mere%20Wala%20Sardar%20%20Slowed%20%20Reverb%20%20merewalasardar%20slowed%20reverb%20lofimusic.mp3",
  ];


/*artist button */
btn2El.addEventListener("click", () => {
  artistOptionsEl.style.display = "block";
  btn2El.style.backgroundColor = "white";
  btn2El.style.color = "black";
});
btn2El.addEventListener("mousemove", () => {
  artistOptionsEl.style.display = "none";
  btn2El.style.backgroundColor = " #3c3939";
  btn2El.style.color = "white";
});
/*playlists button */
btn3El.addEventListener("click", () => {
  playlistsOptionsEl.style.display = "block";
  btn3El.style.backgroundColor = "white";
  btn3El.style.color = "black";
});
btn3El.addEventListener("mousemove", () => {
  playlistsOptionsEl.style.display = "none";
  btn3El.style.backgroundColor = " #3c3939";
  btn3El.style.color = "white";
});

/*trending button */
btn4El.addEventListener("click", () => {
  trendingOptionsEl.style.display = "block";
  btn4El.style.backgroundColor = "white";
  btn4El.style.color = "black";
});
btn4El.addEventListener("mousemove", () => {
  trendingOptionsEl.style.display = "none";
  btn4El.style.backgroundColor = " #3c3939";
  btn4El.style.color = "white";
});

/*change audio thround click on next play buttoon*/
let currentAudio = new Audio ("file:///C:/Users/ummed%20singh%20mali/Downloads/Raataan%20Lambiyan%20(From%20_Shershaah_).mp3");
playNextbuttonEl.addEventListener("click", () => {
  
  if (currentAudio) {
    currentAudio.pause();
  }

  let randomAudio = Math.floor(Math.random() * audioCollection.length);
  console.log(randomAudio);
  console.log(audioCollection[randomAudio]);
  let playList = new Audio(audioCollection[randomAudio]);
  currentAudio = playList;
  console.log(playList);
  playList.play();

});
/*change audio thround click on back play buttoon*/
playBackButtonEl.addEventListener("click", () => {
  if (currentAudio) {
    currentAudio.pause();
  }

  let randomAudio = Math.floor(Math.random() * audioCollection.length);
  console.log(randomAudio);
  console.log(audioCollection[randomAudio]);
  let playList = new Audio(audioCollection[randomAudio]);
  currentAudio = playList;
  console.log(playList);
  playList.play();
 
});

playButtonEl.src =
  "https://cdn-icons-png.flaticon.com/128/4340/4340106.png";
playButtonEl.addEventListener("click", () => {
  if (
    playButtonEl.src ===
    "https://cdn-icons-png.flaticon.com/128/4340/4340106.png"
  ) {
    playButtonEl.src =
      "https://cdn-icons-png.flaticon.com/128/6364/6364353.png";
    currentAudio.play();
  } else {
    playButtonEl.src =
      "https://cdn-icons-png.flaticon.com/128/4340/4340106.png";
    currentAudio.pause();
  }
});

let imgUrlCollection = [
  "url(https://w0.peakpx.com/wallpaper/883/756/HD-wallpaper-chinmayi-musician-singer-best-female-singer-songdew-chinmayi-fusion-music-latest-songs-world-music-indian-singer-hindi-songs.jpg)",
  "url(https://wallpapercave.com/dwp1x/wp6669272.jpg)",
  "url(https://wallpapercave.com/dwp1x/wp8073211.jpg)",
  "url(https://wallpapercave.com/dwp1x/wp8073938.jpg)",
  "url(https://wallpapercave.com/dwp1x/wp12332125.jpg)",
  "url(https://wallpapercave.com/dwp1x/wp12485470.jpg)",
  "url(https://wallpapercave.com/dwp1x/wp12137965.jpg)",
  "url(https://wallpapercave.com/dwp1x/wp11388997.jpg)",
  "url(https://wallpapercave.com/dwp1x/wp12405057.jpg)",
  "url(https://wallpapercave.com/dwp1x/wp11227248.jpg)",
  "url(https://wallpapercave.com/dwp1x/wp9002350.jpg)",
  "url(https://wallpapercave.com/dwp1x/wp6174531.jpg)",
  "url(https://wallpapercave.com/dwp1x/wp9002350.jpg)",
  "url(https://wallpapercave.com/dwp1x/wp9002340.jpg)",
  "url(https://wallpapercave.com/dwp1x/wp9002337.jpg)",
  "url(https://wallpapercave.com/dwp1x/wp9002318.jpg)",
  "url(https://wallpapercave.com/dwp1x/wp8801926.jpg)",
  "url(https://wallpapercave.com/wp/wp8901764.jpg)",
  "url(https://wallpapercave.com/dwp1x/wp8633074.png)",
  "url(https://wallpapercave.com/dwp1x/wp7245995.jpg)",
  "url(https://wallpapercave.com/dwp1x/wp2590607.jpg)",
  "url(https://wallpapercave.com/dwp1x/wp8073465.jpg)",
  "url(https://wallpapercave.com/dwp1x/wp8073411.jpg)",
  "url(https://wallpapercave.com/dwp1x/wp8073284.jpg)",
   "url(https://wallpapercave.com/dwp1x/wp8073262.jpg)",
  
]
setInterval(changeBgImg,25000)
let currentImg = 0;
nextBgImgEl.addEventListener("click", changeBgImg);
backToBgImgEl.addEventListener("click", changeBgImg);
function changeBgImg (){
  currentImg++;
  console.log(currentImg);
  let url = imgUrlCollection[currentImg];
  backgroundEl.style.backgroundImage = url;

  if(currentImg == imgUrlCollection.length){
    currentImg = 0;
  }

}

// let randomNumber = Math.floor(Math.random()*3);
// backgroundImagesCollection(`${randomNumber}`)

// console.log(backgroundImagesCollection(`${randomNumber}`))
// console.log(randomNumber);

// let backgroundImagesCollection = [
//   url("https://e0.pxfuel.com/wallpapers/202/659/desktop-wallpaper-genius-bollywood-movie-tera-fitoor-song-utkarsh-ishitha-chauhan-thumbnail.jpg"),
//   url("https://e0.pxfuel.com/wallpapers/1005/476/desktop-wallpaper-thangamagan-oh-oh-video-anirudh-ravichander-dhanush-bollywood-movie-songs-songs-movie-songs-thumbnail.jpg"),
//   url("https://e0.pxfuel.com/wallpapers/49/554/desktop-wallpaper-tu-jo-mili-lyrics-in-hindi-english-hacked-movie-hacks-bollywood-songs-songs-yasser-desai-thumbnail.jpg")
// ]

// console.log("hii");
// let songIndex = 0;
// let audioElement = new Audio(); // Replace 'path-to-your-audio-file.mp3' with the actual path

// let findPlaybtn = document.querySelector('.play-images');
// let runningBar = document.querySelector('.runningBar');

// runningBar.addEventListener('timeupdate', () => {
//     console.log('timeupdate');
// });

// findPlaybtn.addEventListener('click', () => {
//     if (audioElement.paused || audioElement.currentTime <= 0) {
//         audioElement.play();
//         findPlaybtn.classList.remove('play-images');
//         findPlaybtn.classList.add('paused-images');
//     } else {
//         audioElement.pause();
//         findPlaybtn.classList.remove('paused-images');
//         findPlaybtn.classList.add('play-images');
//     }
// });

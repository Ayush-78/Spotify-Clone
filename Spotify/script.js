console.log("Welcome to Spotify");


//initialize the variable
let songIndex=0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs =[
    {songName: "Salam-e-Ishq", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "Salam-e-Ishq", filePath:"songs/2.mp3", coverPath:"covers/2.jpg"},
    {songName: "Salam-e-Ishq", filePath:"songs/3.mp3", coverPath:"covers/3.jpg"},
    {songName: "Salam-e-Ishq", filePath:"songs/4.mp3", coverPath:"covers/4.jpg"},
    {songName: "Salam-e-Ishq", filePath:"songs/5.mp3", coverPath:"covers/5.jpg"},
    {songName: "Salam-e-Ishq", filePath:"songs/6.mp3", coverPath:"covers/6.jpg"},
    {songName: "Salam-e-Ishq", filePath:"songs/7.mp3", coverPath:"covers/7.jpg"},
    {songName: "Salam-e-Ishq", filePath:"songs/8.mp3", coverPath:"covers/8.jpg"}
]

songItems.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src= songs[i].coverPath;
    element.getElementsByClassName("src")[0].innerText=songs[i].songName;
})
//audioElement.play();


//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
   if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity=1;
   }
   else{
    audioElement.pause();
    masterPlay.classList.remove('fa-circle-pause');
    masterPlay.classList.add('fa-circle-play');
    gif.style.opacity=0;

   } 
})

//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    
    //Update Seekbar
    progress= parseInt(audioElement.currentTime/audioElement.duration)*100;
  
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime= myProgressBar.value * audioElement.duration/100;
})
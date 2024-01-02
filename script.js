let songIndex =0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let imgmaster = document.getElementById('tager');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let masterSongName = document.getElementById('MasterName');
let timeint = document.getElementById('timesrc');

let songs = [
    {songName:"Pyaar Hota Kayi Baar Hai", filePath: "song/1.mp3", coverPath:"covers/1.jpg" ,timedelay:"03:36"},
    {songName:"Jhoome Jo Pathaan Song ", filePath: "song/2.mp3", coverPath:"covers/2.jpg",timedelay:"03:28"},
    {songName:"MAIN KHILADI ( Selfiee )", filePath: "song/3.mp3", coverPath:"covers/3.jpeg",timedelay:"03:07"},
    {songName:"FILHALL |  BPraak", filePath: "song/4.mp3", coverPath:"covers/4.jpg",timedelay:"04:15"},
    {songName:"Meri Jaan-Gangubai Kathiawadi ", filePath: "song/5.mp3", coverPath:"covers/5.jpg",timedelay:"03:58"},
    {songName:"Drishyam 2 - Title Track ", filePath: "song/6.mp3", coverPath:"covers/6.jpg",timedelay:"03:20"},
    {songName:"Radhe Title Track", filePath: "song/7.mp3", coverPath:"covers/7.jpg",timedelay:"03:01"},
    {songName:"Hari Har Full Song ", filePath: "song/8.mp3", coverPath:"covers/8.jpg",timedelay:"04:14"},
    {songName:"The Bhoot | Housefull 4 ", filePath: "song/9.mp3", coverPath:"covers/9.jpg",timedelay:"03:58"},
    {songName:"Baarish Ban Jaana ", filePath: "song/10.mp3", coverPath:"covers/10.jpg",timedelay:"03:20"},
    {songName:"Baarish Ban Jaana ", filePath: "song/11.mp3", coverPath:"covers/10.jpg",timedelay:"03:20"},
]
songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songName;
})

//Handel Play/Pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity =1;
        timeint.innerText = getTime;
        changeTime(songIndex);
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
        clearInterval(getSet);
    }
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
         element.classList.add('fa-play-circle');
    })
   
}

//Listen to event
audioElement.addEventListener('timeupdate',()=>{
    //update
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
    if(progress==100){
        myProgressBar.value = 0;
        songIndex++;
        if(songIndex==11){
            songIndex = 0;
        }
        audioElement.src = `song/${songIndex+1}.mp3`;
        makeAllPlays();
        let num = songIndex;
    num = num.toString();
    let ef = document.getElementById(num);
     ef.className = "far songItemPlay fa-pause-circle";
        masterSongName.innerText = songs[songIndex].songName;
        imgmaster.src = songs[songIndex].coverPath;
        imgmaster.style.opacity =1;
        audioElement.currentTime=0;
        audioElement.play();
        clearInterval(getSet);
      timeint.innerText = songs[songIndex].timedelay
        changeTime(songIndex);
    }
});

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = (myProgressBar.value*audioElement.duration)/100;
})


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
   element.addEventListener('click', (e)=>{
    makeAllPlays();
        songIndex = parseInt(e.target.id);
        if(audioElement.paused || audioElement.currentTime<=0){
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `song/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        imgmaster.src = songs[songIndex].coverPath;
        imgmaster.style.opacity =1;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity =1;
        timeint.innerText = songs[songIndex].timedelay
        changeTime(songIndex);
        }
        else{
            audioElement.pause();
            e.target.classList.remove('fa-pause-circle');
        e.target.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
        clearInterval(getSet);

        }
        
   })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=10){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `song/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    imgmaster.src = songs[songIndex].coverPath;
    imgmaster.style.opacity =1;
        audioElement.currentTime=0;
        audioElement.play();
        makeAllPlays();
        let num = songIndex;
    num = num.toString();
    let ef = document.getElementById(num);
     ef.className = "far songItemPlay fa-pause-circle";
        timeint.innerText = songs[songIndex].timedelay
        clearInterval(getSet);
        changeTime(songIndex);
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex =0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `song/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    imgmaster.src = songs[songIndex].coverPath;
    imgmaster.style.opacity =1;
        audioElement.currentTime=0;
        audioElement.play();
        makeAllPlays();
        let num = songIndex;
        num = num.toString();
        let ef = document.getElementById(num);
        ef.className = "far songItemPlay fa-pause-circle"
        timeint.innerText = songs[songIndex].timedelay
        clearInterval(getSet);
        changeTime(songIndex);
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})

let getSet;
 function changeTime(i){
    let a = songs[i].timedelay
    let b = parseInt(a[4]);
    let  c = parseInt(a[3]);
    let d = parseInt(a[1]);
    getSet = setInterval(()=>{
    if(b==0){
        b=10;
        if(c==0){
            c=6;
            d--;
        }
        c--;
    }
    b--;
    let e = "0"+d.toString()+":"+c.toString()+b.toString();
   timeint.innerText = e;

},1000)
 }



var welcome = document.querySelector(".welcome") ;
var loader = document.querySelector(".loader") ;
var circle = document.querySelector(".circle") ;
var cut = document.querySelector(".cut") ;
var title = document.querySelector(".title") ;
var subtitle = document.querySelector(".subtitle") ;
var body = document.querySelector("body") ;
var VideoBox = document.querySelector("#VideoBox") ;
scrollTo(0,0);

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Video Load Sections

var video = (src) => {
    var vid = document.createElement("video");
    vid.classList.add("illustration");
    var source = document.createElement("source") ;
    source.src = src ;
    vid.append(source) ;
    vid.load();
    return vid ;
}

// Movie Display Sections


var MovieDisplay = {
    play : (Video) => {
        VideoBox.style.opacity = 0 ;
        setTimeout(()=>{
            VideoBox.innerHTML = "" ;
            setTimeout(()=>{
                VideoBox.append(Video);
                Video.style.opacity = 1 ;
                VideoBox.style.opacity = 1 ;
                Video.play();
            },500);
        },500);
    }
}

async function typer(obj,text) {
    obj.innerHTML = "" ;
    for (let i=0; i< text.length; i++)
    {
        obj.innerHTML = obj.innerHTML + text[i] ;
        await sleep(100);
    }
}
var welcometexts = async () => {
    text = "I am Yash goswami" ;
    await typer(subtitle,text);
    await  sleep(1000);
    text = "I am a Student" ;
    await typer(subtitle,text);
    await  sleep(1000);
    text = "Situated in Hisar, Haryana" ;
    await typer(subtitle,text);
    await  sleep(1000);
    text = "This is my portfolio" ;
    await typer(subtitle,text);
    await  sleep(1000);
    text = "Explore..." ;
    await typer(subtitle,text);
} ;

body.style.overflow = "hidden" ;
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(()=>{
        body.style.overflow = "scroll" ;
        // loader.style.animation = "loaderanime 1s forwards";
        setTimeout(()=>{
            welcome.style.opacity = 0 ;
            setTimeout(()=>{welcome.style.zIndex = -100;},1000);
            if (window.innerWidth < window.innerHeight)
            {
                circle.style.animation = "circlepor 1s";
            }
            else
            {
                cut.style.animation = "opening 1s";
            }
            setTimeout(()=>{
                title.style.opacity = 1 ;
                setTimeout(()=>{
                    subtitle.style.opacity = 1 ;
                    welcometexts() ;
                    },500);
            },1000) ;
        },1000);
    },500)
}, false);

var Loader = {
        off : () => {
            setTimeout(()=>{
                setTimeout(()=>{
                    welcome.style.opacity = 0 ;
                    setTimeout(()=>{welcome.style.zIndex = -100;},1000);
                },500) ;
            },500);
        },
        on :() => {
            setTimeout(()=>{
                welcome.style.zIndex = 100;
                welcome.style.opacity = 1 ;
                setTimeout(()=>{
                },500) ;
            },500);
        }
}


var Hello_Video = video("assets/hello.mp4");
var HomeTown_Video = video("assets/beautiful-city.mp4");
var Student_Video = video("assets/student.mp4") ;
var Work_Video = video("assets/work.mp4");
var Uttrakhand_Video = video("assets/forest.mp4");
var Collage_Video = video("assets/collage.mp4" );
var Thanks_Video = video("assets/thanks-button.mp4");



var AboutMeAnimetion = async (obj) => {
    await sleep(1000);
    MovieDisplay.play(Hello_Video);
    await typer(obj,"Hello I am Yash Goswami.");
    await sleep(1000);
    MovieDisplay.play(HomeTown_Video);
    await typer(obj,"I am from Hisar, Haryana.");
    await sleep(2000);
    MovieDisplay.play(Student_Video);
    await typer(obj,"I am a Student.");
    await sleep(1000);
    await typer(obj,"Taking about my technical knowledge.");
    await sleep(1000);
    MovieDisplay.play(Work_Video);
    await typer(obj,"I know Multiple languages but not mastered anyone.");
    await sleep(1000);
    MovieDisplay.play(Uttrakhand_Video);
    await typer(obj,"I was Born in Kashipur, Uttrakhand.");
    await sleep(1000);
    MovieDisplay.play(Collage_Video);
    setTimeout(()=>{Collage_Video.pause()},2500) ;
    await typer(obj,"Currently Doing B-tech from birla institute of applied sciennces");
    await sleep(1000);
    MovieDisplay.play(Thanks_Video);
    await typer(obj,"Thanks for visiting our site.");
    await  sleep(1000);
    await typer(obj,"Taking you back to Home Screen");
    await  sleep(1000);
    history.back();

}

var Home = new Screen(document.querySelector(".HomeSCR")) ;
var StoryAboutMe = new Screen(document.querySelector(".StoryAboutMe")) ;

var URLChecker = new BoolListener() ;
URLChecker.watch(()=>{
    var bol ;
    bol = !(location.hash == "") ;
    return bol ;
}) ;
URLChecker.then(()=>{
    if (location.hash=="#aboutme")
    {
        Loader.on() ;
        setTimeout(()=>{
            Home.off() ;
            StoryAboutMe.on();
            Loader.off();
            AboutMeAnimetion(document.querySelector(".speach")) ;
        },1000) ;
    }
}) ;
URLChecker.else(()=>{
    if (location.hash=="")
    {
        Loader.on();
        setTimeout(()=>{
            Home.on();
            StoryAboutMe.off();
            Loader.off();
        },1000) ;
    }
}) ;
URLChecker.enable(true);

if (location.hash=="#aboutme")
{
    Home.off() ;
    StoryAboutMe.on();
    AboutMeAnimetion(document.querySelector(".speach")) ;
}
else
{
    Home.on();
    StoryAboutMe.off();
}
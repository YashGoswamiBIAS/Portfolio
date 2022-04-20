var welcome = document.querySelector(".welcome") ;
var loader = document.querySelector(".loader") ;
var circle = document.querySelector(".circle") ;
var cut = document.querySelector(".cut") ;
var title = document.querySelector(".title") ;
var subtitle = document.querySelector(".subtitle") ;
var body = document.querySelector("body") ;
var illustration = document.querySelector(".illustration") ;
scrollTo(0,0);

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
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

var AboutMeAnimetion = async (obj) => {
    illustration.style.opacity = 0 ;
    await sleep(500);
    illustration.src = "assets/hello.mp4" ;
    illustration.style.opacity = 1 ;
    illustration.play() ;
    await sleep(1000);
    await typer(obj,"Hello I am Yash Goswami.");
    await sleep(1000);
    illustration.style.opacity = 0 ;
    await sleep(500);
    illustration.src = "assets/beautiful-city.mp4" ;
    illustration.style.opacity = 1 ;
    illustration.play() ;
    await typer(obj,"I am from Hisar, Haryana.");
    await sleep(1000);
    illustration.style.opacity = 0 ;
    await sleep(500);
    illustration.src = "assets/student.mp4" ;
    illustration.style.opacity = 1 ;
    illustration.play() ;
    await typer(obj,"I am a Student.");
    await sleep(1000);
    await typer(obj,"Taking about my technical knowledge.");
    await sleep(1000);
    illustration.style.opacity = 0 ;
    await sleep(500);
    illustration.src = "assets/work.mp4" ;
    illustration.style.opacity = 1 ;
    illustration.play() ;
    await typer(obj,"I know Multiple languages but not mastered anyone.");
    await sleep(1000);
    illustration.style.opacity = 0 ;
    await sleep(500);
    illustration.src = "assets/forest.mp4" ;
    illustration.style.opacity = 1 ;
    illustration.play() ;
    await typer(obj,"I was Born in Kashipur, Uttrakhand.");
    await sleep(1000);
    illustration.style.opacity = 0 ;
    await sleep(500);
    illustration.src = "assets/collage.mp4" ;
    illustration.style.opacity = 1 ;
    illustration.play() ;
    setTimeout(()=>{illustration.pause()},2500) ;
    await typer(obj,"Currently Doing B-tech from birla institute of applied sciennces");
    await sleep(1000);
    illustration.style.opacity = 0 ;
    await sleep(500);
    illustration.src = "assets/thanks-button.mp4" ;
    illustration.style.opacity = 1 ;
    illustration.play() ;
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
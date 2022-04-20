var welcome = document.querySelector(".welcome") ;
var loader = document.querySelector(".loader") ;
var circle = document.querySelector(".circle") ;
var cut = document.querySelector(".cut") ;
var title = document.querySelector(".title") ;
var subtitle = document.querySelector(".subtitle") ;
var body = document.querySelector("body") ;

scrollTo(0,0);

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
var welcometexts = async () => {
    subtitle.innerHTML = "" ;
    text = "I am Yash goswami" ;
    for (let i=0; i< text.length; i++)
    {
        subtitle.innerHTML = subtitle.innerHTML + text[i] ;
        await sleep(100);
    }
    await  sleep(1000);
    subtitle.innerHTML = "" ;
    text = "I am a Student" ;
    for (let i=0; i< text.length; i++)
    {
        subtitle.innerHTML = subtitle.innerHTML + text[i] ;
        await sleep(100);
    }
    await  sleep(1000);
    subtitle.innerHTML = "" ;
    text = "Situated in Hisar, Haryana" ;
    for (let i=0; i< text.length; i++)
    {
        subtitle.innerHTML = subtitle.innerHTML + text[i] ;
        await sleep(100);
    }
    await  sleep(1000);
    subtitle.innerHTML = "" ;
    text = "This is my portfolio" ;
    for (let i=0; i< text.length; i++)
    {
        subtitle.innerHTML = subtitle.innerHTML + text[i] ;
        await sleep(100);
    }
    await  sleep(1000);
    subtitle.innerHTML = "" ;
    text = "Explore..." ;
    for (let i=0; i< text.length; i++)
    {
        subtitle.innerHTML = subtitle.innerHTML + text[i] ;
        await sleep(100);
    }
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
}
else
{
    Home.on();
    StoryAboutMe.off();
}
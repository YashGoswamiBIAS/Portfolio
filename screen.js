class Screen {
    constructor(obj){
        obj.setAttribute("style",`
	height:100%;
	width:100%;`);
        console.log("Screen Created");
        this.off = function () {
            obj.style.opacity = 0 ;
            setTimeout(()=>{
                obj.style.zIndex = "-1" ;
                obj.style.display = "none" ;
                obj.style.opacity = 0 ;
            },500);
        }
        this.on = function () {
            obj.style.display = "block" ;
            obj.style.zIndex = 0 ;
            setTimeout(()=>{
                obj.style.opacity = 1 ;
            },1000);
        }
    }
}
var LastScreen ;
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var HomeScreen = new Screen(document.querySelector(".HomeSCR")) ;
var AboutMe = new Screen(document.querySelector(".AboutMe")) ;

document.querySelector(".cardaexp").onclick = async () => {
    HomeScreen.off() ;
    AboutMe.on();
}

var carda = document.querySelector(".carda");
var cardb = document.querySelector(".cardb");
var cardc = document.querySelector(".cardc");

if (window.innerWidth < window.innerHeight)
{
    carda.onclick = async () => {
        HomeScreen.off() ;
        AboutMe.on();
    }
}


var backbtn = document.querySelector(".backbtn") ;
backbtn.onclick = async ()=>{
    AboutMe.off();
    HomeScreen.on() ;
}

// Screen Loader Section
HomeScreen.on() ;
AboutMe.off();
var welcome = document.querySelector(".welcome") ;
var loader = document.querySelector(".loader") ;

var body = document.querySelector("body") ;

body.style.overflow = "hidden" ;
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(()=>{
        body.style.overflow = "scroll" ;
        loader.style.animation = "test 1s forwards";
        setTimeout(()=>{
            welcome.style.opacity = 0 ;
            setTimeout(()=>{welcome.remove();},1000);
        },1000);
    },500)
}, false);
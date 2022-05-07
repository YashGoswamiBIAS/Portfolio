var vid1 = document.querySelector(".vid1");
var vid2 = document.querySelector(".vid2");
var vid3 = document.querySelector(".vid3");
var cover = document.querySelector(".covervid");
var certificate = document.querySelector(".certificate");

vid1.style.opacity = 0 ;
vid2.style.opacity = 0 ;
vid3.style.opacity = 0 ;
cover.style.opacity = 1 ;

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
VideoListener1 = new BoolListener() ;
VideoListener1.watch(()=>{return isInViewport(document.querySelector(".vid1"))}) ;
VideoListener1.then(()=>{
    document.querySelector(".vid1").currentTime = 0;
    document.querySelector(".vid1").style.opacity = 1 ;
    setTimeout(()=>{document.querySelector(".vid1").play();},500);
    VideoListener1.enable(false);
});
VideoListener1.else(()=>{
});
VideoListener1.enable(true);

VideoListener2 = new BoolListener() ;
VideoListener2.watch(()=>{return isInViewport(document.querySelector(".vid2"))}) ;
VideoListener2.then(()=>{
    document.querySelector(".vid2").currentTime = 0;
    document.querySelector(".vid2").style.opacity = 1 ;
    setTimeout(()=>{document.querySelector(".vid2").play();},500);
    VideoListener2.enable(false);
});
VideoListener2.else(()=>{
});
VideoListener2.enable(true);

VideoListener3 = new BoolListener() ;
VideoListener3.watch(()=>{return isInViewport(document.querySelector(".vid3"))}) ;
VideoListener3.then(()=>{
    document.querySelector(".vid3").currentTime = 0;
    document.querySelector(".vid3").style.opacity = 1 ;
    setTimeout(()=>{document.querySelector(".vid3").play();},500);
    VideoListener3.enable(false);
});
VideoListener3.else(()=>{
});
VideoListener3.enable(true);

VideoListenercover = new BoolListener() ;
VideoListenercover.watch(()=>{return isInViewport(document.querySelector(".covervid"))}) ;
VideoListenercover.then(()=>{
    document.querySelector(".covervid").currentTime = 0;
    document.querySelector(".covervid").style.opacity = 1 ;
    setTimeout(()=>{document.querySelector(".covervid").play();},500);
    VideoListenercover.enable(false);
});
VideoListenercover.else(()=>{
});
VideoListenercover.enable(true);


certificate = new BoolListener() ;
certificate.watch(()=>{return isInViewport(document.querySelector(".certificate"))}) ;
certificate.then(()=>{
    document.querySelector(".certificate_vid").currentTime = 0;
    document.querySelector(".certificate_vid").style.opacity = 1 ;
    document.querySelector(".Certificates").style.opacity = 1 ;
    setTimeout(()=>{document.querySelector(".certificate_vid").play();},500);
    certificate.enable(false);
});
certificate.else(()=>{
});
certificate.enable(true);

var techs = () => {
    document.querySelector(".bubble").style.animation = "bubbleani 800ms forwards" ;
    setTimeout(()=>{
        changeset.style.opacity = 1 ;
        proimage.style.opacity = 1 ;
    },800);
} ;


var changeset = document.querySelector(".changeset") ;
var proimage = document.querySelector(".proimage") ;

var changetext = document.querySelector(".changetext");

var TechsIKnow = ["HTML", "CSS", "JAVASCRIPT", "PYTHON", "NODEJS", "BOOTSTRAP", "C", "C#"] ;
var TechsIKnowImage = ["assets/banner/html.svg","assets/banner/css.svg","assets/banner/js.svg", "assets/banner/python.svg", "assets/banner/node.svg", "assets/banner/boot.svg", "assets/banner/c.svg", "assets/banner/cs.svg"] ;
var TechIKnowcolor = ["#ff5a00", "#107dff", "#ffd138", "blue", "#2bc71d", "#68369c", "#b8b8b8", "#6c00ba"] ;

var bubble = document.querySelector(".bubble") ;
BubbleWatcher = new BoolListener() ;
BubbleWatcher.watch(()=>{return isInViewport(document.querySelector(".techs"))}) ;
BubbleWatcher.then(()=>{
    document.querySelector(".bubble").style.opacity = 1 ;
    setTimeout(()=>{techs()},500);
    BubbleWatcher.enable(false);
});
BubbleWatcher.else(()=>{
});
BubbleWatcher.enable(true);

AboutMeVid = new BoolListener() ;
AboutMeVid.watch(()=>{return isInViewport(document.querySelector(".aboutmeVid"))}) ;
AboutMeVid.then(()=>{
    document.querySelector(".aboutmeVid").currentTime = 0;
    document.querySelector(".aboutmeVid").style.opacity = 1 ;
    setTimeout(()=>{document.querySelector(".aboutmeVid").play();},500);
    setTimeout(()=>{document.querySelector(".sider").style.opacity = 1 ;},500) ;
    setTimeout(()=>{document.querySelector("#aboutmeext").style.opacity = 1 ;},500) ;
    AboutMeVid.enable(false);
});
AboutMeVid.else(()=>{
});
AboutMeVid.enable(true);



//  Techs I Know buttons active

var techno = 0 ;

var ChangeTech = (arr) => {
    if (arr=="left" && techno>0)
    {
        techno--;
    }
    else if (arr=="right" && techno<7)
    {
        techno++ ;
    }

    changeset.style.opacity = 0 ;
    proimage.style.opacity = 0 ;
    setTimeout(()=>{
        bubble.style.animation = "bubbleanireverse 800ms forwards" ;
        setTimeout(()=>{
            changetext.innerHTML = TechsIKnow[techno] ;
            proimage.src = TechsIKnowImage[techno] ;
            bubble.style.background = TechIKnowcolor[techno] ;
            techs();
        },800);
    },200) ;
} ;


if (isInViewport(document.querySelector(".covervid")))
{
    document.querySelector(".covervid").currentTime = 0;
    document.querySelector(".covervid").style.opacity = 1 ;
    setTimeout(()=>{document.querySelector(".covervid").play();},500);
    VideoListenercover.enable(false);
}
if (window.innerWidth > window.innerHeight)
{
    document.querySelector(".covervid").currentTime = 0;
    document.querySelector(".covervid").style.opacity = 1 ;
    setTimeout(()=>{document.querySelector(".covervid").play();},2000);
    VideoListenercover.enable(false);
}
if (isInViewport(document.querySelector(".vid1")))
{
    document.querySelector(".vid1").currentTime = 0;
    document.querySelector(".vid1").style.opacity = 1 ;
    setTimeout(()=>{document.querySelector(".vid1").play();},500);
    VideoListener1.enable(false);
}
if (isInViewport(document.querySelector(".vid2")))
{
    document.querySelector(".vid2").currentTime = 0;
    document.querySelector(".vid2").style.opacity = 1 ;
    setTimeout(()=>{document.querySelector(".vid2").play();},500);
    VideoListener2.enable(false);
}
if (isInViewport(document.querySelector(".vid3")))
{
    document.querySelector(".vid3").currentTime = 0;
    document.querySelector(".vid3").style.opacity = 1 ;
    setTimeout(()=>{document.querySelector(".vid3").play();},500);
    VideoListener3.enable(false);
}


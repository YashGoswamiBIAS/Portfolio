var vid1 = document.querySelector(".vid1");
var vid2 = document.querySelector(".vid2");
var vid3 = document.querySelector(".vid3");
var cover = document.querySelector(".covervid");
var aboutmeVid = document.querySelector(".aboutmeVid");

vid1.style.opacity = 1 ;
vid2.style.opacity = 1 ;
vid3.style.opacity = 1 ;
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
    AboutMeVid.enable(false);
});
AboutMeVid.else(()=>{
});
AboutMeVid.enable(true);

Sider = new BoolListener() ;
Sider.watch(()=>{return isInViewport(document.querySelector(".sider"))}) ;
Sider.then(()=>{
    setTimeout(()=>{document.querySelector(".sider").style.opacity = 1 ;},800) ;
    Sider.enable(false);
});
Sider.else(()=>{
});
Sider.enable(true);



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

var Section1 = new BoolListener() ;
Section1.watch(()=>{
    return document.querySelector(".carda").matches(":hover") ;
}) ;
Section1.then(()=>{
    document.querySelector(".cardaexp").style.display = "block" ;
    setTimeout(()=>{
        document.querySelector(".cardaexp").style.opacity = 1 ;
    },300) ;
}) ;
Section1.else(()=>{
    document.querySelector(".cardaexp").style.opacity = 0 ;
    setTimeout(()=>{
        document.querySelector(".cardaexp").style.display = "none" ;
    },300) ;
}) ;
Section1.enable(true);

var Section2 = new BoolListener() ;
Section2.watch(()=>{
    return document.querySelector(".cardb").matches(":hover") ;
}) ;
Section2.then(()=>{
    document.querySelector(".cardbexp").style.display = "block" ;
    setTimeout(()=>{
        document.querySelector(".cardbexp").style.opacity = 1 ;
    },300) ;
}) ;
Section2.else(()=>{
    document.querySelector(".cardbexp").style.opacity = 0 ;
    setTimeout(()=>{
        document.querySelector(".cardbexp").style.display = "none" ;
    },300) ;
}) ;
Section2.enable(true);

var Section3 = new BoolListener() ;
Section3.watch(()=>{
    return document.querySelector(".cardc").matches(":hover") ;
}) ;
Section3.then(()=>{
    document.querySelector(".cardcexp").style.display = "block" ;
    setTimeout(()=>{
        document.querySelector(".cardcexp").style.opacity = 1 ;
    },300) ;
}) ;
Section3.else(()=>{
    document.querySelector(".cardcexp").style.opacity = 0 ;
    setTimeout(()=>{
        document.querySelector(".cardcexp").style.display = "none" ;
    },300) ;
}) ;
Section3.enable(true);


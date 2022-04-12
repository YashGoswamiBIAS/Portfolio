var vid1 = document.querySelector(".vid1")
var vid2 = document.querySelector(".vid2")
var vid3 = document.querySelector(".vid3")
vid1.style.opacity = 1 ;
vid2.style.opacity = 1 ;
vid3.style.opacity = 1 ;

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
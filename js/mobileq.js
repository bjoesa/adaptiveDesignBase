/* JavaScript Media Queries 
https://www.sitepoint.com/javascript-media-queries/*/

if (matchMedia) {
    const mq = window.matchMedia("(min-width: 500px)");
    mq.addListener(WidthChange);
    WidthChange(mq);
}

// media query change
function WidthChange(mq) {

    const msg = (mq.matches ? "more" : "less") + " than 500 pixels";
    document.getElementById("current").firstChild.nodeValue = msg;

}
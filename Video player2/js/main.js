    handleMouseMove(e);
});

// raf polyfill
window.requestAnimFrame = (function(){
return  window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
     function(/* function FrameRequestCallback */ callback, /* DOMElement Element */ element){
       window.setTimeout(callback, 1000 / 60);
     };
})();
//get all videos from the Class array
var videos = document.getElementsByClassName("vids");
var speed = 10;

//animating actions
var startTime = undefined;
function render(time) {
  console.log("drag: " + drag);

    if (time === undefined)
    time = Date.now();
    if (startTime === undefined)
    startTime = time;
    //LINE 1
    //big videos
    reel.style.right = ((time - startTime - (drag * 4) )/speed % 2880) + "px";
    reel2.style.right = (((time - startTime - 5400 - (drag * 4)  )/speed % 2880) + "px");
    reel3.style.right = (((time - startTime - 14400 - (drag * 4) )/speed % 2880) + "px");
    reel4.style.right = (((time - startTime - 18000 - (drag * 4) )/speed % 2880) + "px");
    //small videos
    reelsmall.style.right = (((time - startTime - 3600 - (drag * 4) )/speed % 2880) + "px");
    reelsmall2.style.right = (((time - startTime - 3600 - (drag * 4) )/speed % 2880) + "px");
    reelsmall3.style.right = (((time - startTime - 9000 - (drag * 4) )/speed % 2880) + "px");
    reelsmall4.style.right = (((time - startTime - 9000 - (drag * 4) )/speed % 2880) + "px");
    reelsmall5.style.right = (((time - startTime - 10800 - (drag * 4) )/speed % 2880) + "px");
    reelsmall6.style.right = (((time - startTime - 10800 - (drag * 4) )/speed % 2880) + "px");
    reelsmall7.style.right = (((time - startTime - 12600 - (drag * 4) )/speed % 2880) + "px");
    reelsmall8.style.right = (((time - startTime - 12600 - (drag * 4) )/speed % 2880) + "px");
}

document.ready  = function() {
    (function animloop(){
       render();
       requestAnimFrame(animloop, videos);
    })();
};

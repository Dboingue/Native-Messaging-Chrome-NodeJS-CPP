$( document ).ready(function() {
var target = document.getElementsByClassName('rclock-bottom')[0];
if (target) 
{

 var board = document.getElementsByTagName("cg-board")[0];
    var rect = board.getBoundingClientRect();
    var x0 = Math.round(rect.left); var xf0 = rect.left;
    var y0 = Math.round(rect.top); var yf0 = rect.top;
    var w = Math.round(rect.width);
    var sqsize = Math.round(w / 8); var sqsizef = rect.width / 8;


    var canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = w;
    canvas.style.position = 'absolute';
    canvas.style.left = x0 + "px";
    canvas.style.top = y0 + "px";
    canvas.style.zIndex = 1;
    canvas.style.pointerEvents = 'none';
    document.body.appendChild(canvas);
    var context = canvas.getContext('2d');

function drawGreen() {
        context.strokeStyle = '#17FF00'; context.lineWidth = 2;
        context.beginPath();

        for (i = 1; i < 8; i++) {
            context.moveTo(i*sqsize, 0);
            context.lineTo(i * sqsize, w);                  
        }
        for (j = 1; j < 8; j++) {
            context.moveTo(0, j * sqsize);
            context.lineTo(w, j * sqsize);
        }
        context.stroke();
        context.closePath();
    }
    function drawGrey() {
        context.strokeStyle = '#465358'; context.lineWidth = 2;
        context.beginPath();

        for (i = 1; i < 8; i++) {
            context.moveTo(i * sqsize, 0);
            context.lineTo(i * sqsize, w);
        }
        for (j = 1; j < 8; j++) {
            context.moveTo(0, j * sqsize);
            context.lineTo(w, j * sqsize);
        }
        context.stroke();
        context.closePath();
    }

 var observer;
    var config;
    var oncebeep = 0,whosmove;
    //var target = document.getElementsByClassName('rclock-bottom')[0];
          observer = new MutationObserver(function (mutations) {
        if (document.getElementsByClassName("rclock rclock-bottom running")[0] != undefined) {

            if (oncebeep === 1) {
                drawGreen();
//copyStringToClipboard("mymove");
chrome.runtime.sendMessage({beep: "do"});
oncebeep = 0;
}
              whosmove = 1;
            }
        if (document.getElementsByClassName("rclock rclock-bottom running")[0] == undefined)
        {
if (oncebeep === 0) {
//copyStringToClipboard("oppmove");
chrome.runtime.sendMessage({beep: "do1"});
    oncebeep = 1;
    drawGrey();
}
          whosmove = 0;
        }
   
});


config = {
     attributes: true,
    childList: false,
   subtree: false
};


    if (target != undefined && target != null)
{
     observer.observe(target, config);
}


document.addEventListener("keydown", function(event){

    if(event.keyCode==77){
     document.getElementsByClassName("fbt go-berserk")[0].click();
    }

});


var perf;
const sendToBg = (e) => {
//perf=Date.now();
//chrome.runtime.sendMessage({beep: "do"}
	//, function(response) {
  //console.log(response.farewell);
//}
//);
}


document.addEventListener('mousedown', sendToBg)


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.check == "time")
    {
     //console.log(Date.now()-perf);
    }
 //return Promise.resolve("Dummy response to keep the console quiet");
    //if (request.icon == "gray")
     //chrome.browserAction.setIcon({path:"icon16g.ico"});
  });
}
	});



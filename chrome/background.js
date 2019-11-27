
var port = chrome.runtime.connectNative('native.messaging.example')

port.onMessage.addListener((req) => {
  if (chrome.runtime.lastError) {
    console.log(chrome.runtime.lastError.message)
  }
  handleMessage(req)
})

port.onDisconnect.addListener(() => {
  if (chrome.runtime.lastError) {
    console.log(chrome.runtime.lastError.message)
  }
  console.log('Disconnected')
})

//var inter=setInterval(function(){
//port.postMessage({message: 'ping', body: 'hello from browser extension'})
//},1000)


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.beep == "do")
     port.postMessage({message: 'ping', body: 'hello from browser extension'});
else if (request.beep == "do1")
port.postMessage({message: 'ping1', body: 'hello from browser extension'});
  // return Promise.resolve("Dummy response to keep the console quiet");
    //if (request.icon == "gray")
     //chrome.browserAction.setIcon({path:"icon16g.ico"});
  });


function handleMessage (req) {
  if (req.message === 'pong') {
    console.log(req);
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {check: "time"}
   // , function(response) {
    //console.log(response.farewell);
  //}
  );
});
  }
}

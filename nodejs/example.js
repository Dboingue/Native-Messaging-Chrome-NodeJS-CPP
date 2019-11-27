#!/home/s/.nvm/versions/node/v8.11.2/bin/node

// Might be good to use an explicit path to node on the shebang line
// in case it isn't in PATH when launched by Chrome

/*
var sendMessage = require('../protocol')(handleMessage);

function alertTerminal(){
 console.log("\007");
 sendMessage({message: 'pong', body: 'beep should beep'});
}

function handleMessage (req) {
  if (req.message === 'ping') {
    alertTerminal();
   // sendMessage({message: 'pong', body: 'hello from nodejs app'});
    
  }
}*/
/*
const cp = require('child_process');

function beep(frequency, duration) {
  cp.execSync(`rundll32.exe Kernel32.dll,Beep ${frequency},${duration}`);
sendMessage({message: 'pong', body: 'do beep'});
}*/
//var addon = require('bindings')('../addon.node')
const addon = require('../build/Release/addon');
//console.log(addon.hello());


var sendMessage = require('../protocol')(handleMessage);

function handleMessage (req) {
  if (req.message === 'ping') {
    //
     //console.log("\007");
    // process.stderr.write("\007");
    // beep(750,300);
sendMessage({message: 'pong', body: 'do beep'});
//factorialAddon.factorial(5, function (result) {
    //console.log(result);
//});

addon.add(4000,15);

/*setTimeout(function(){
addon.add(3000,30);
},1000)*/

  } 
  else if (req.message === 'ping1')
  {
addon.add(400,15);

  }
}






const Sensor = require("./sensor");
const Engine=require("engine.io")
const server=Engine.listen(8080);
//socket=> client that just is connected

server.on('connection',(socket)=>{
    console.log(`new user connected ${new Date()}`)
    var s1 = new Sensor();
    s1.on("newValueEvent",(val)=>{
        console.log(val)
       socket.send(JSON.stringify({
           s:val
       }))
    });   
})


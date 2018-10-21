
var os = require('os-utils');
const  {EventEmitter}=require("events");


module.exports = class Cpu extends EventEmitter{
    constructor(){
        super ();
       
            setInterval(()=>{  
                _this=this              
                os.cpuUsage(function(v){                   
                    console.log(v)
                    _this.emit("newValueEvent",v)
                }                        
                ,1000);
            })
        
    }
}

const  {EventEmitter}=require("events");


module.exports = class Sensor extends EventEmitter{
    constructor(){
        super ();
        setInterval(()=>{
        const min= 0;
        const max = 200000;
        let currentVal=Math.random()*(max-min)+min;
        this.emit("newValueEvent",currentVal)
        },1000)
    }
}
const EventEmitter = require('events');

class MyEmitter extends EventEmitter{}
const MyEmitter = new MyEmitter();

MyEmitter.on('WaterFull' , ()=>{
    console.log('Please turn off the motor!');
    setTimeout(()=>{
        console.log('Please turn of the motor! Its a gentle reminder')
    }, 3030);
});
console.log("The script is running");
console.log("The Script is Still running")